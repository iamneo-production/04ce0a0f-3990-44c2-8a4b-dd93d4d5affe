package com.examly.springapp.service; 

import org.springframework.stereotype.Service;

import com.examly.springapp.model.Admin;
import com.examly.springapp.model.Room;

import com.examly.springapp.repository.RoomRepository;
import com.examly.springapp.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;


@Service
public class RoomService {

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private AdminRepository adminRepository;

    public Room addRoom(Room room, int id){

        Admin admin=adminRepository.findById(id).get();
        room.setAdmin(admin);
        admin.getRooms().add(room);
        adminRepository.save(admin);
        return roomRepository.save(room);
    }

    public Room editRoom(Room room){
        Room ref = roomRepository.findById(room.getId()).get();
        Admin admin = ref.getAdmin();
        room.setAdmin(admin);
        //roomRepository.setAdmin(room.getRoomNo(),room.getPrice(),room.getType(),id);
        roomRepository.save(room);
        return room;
    }

    public void deleteRoom(int id){
        roomRepository.deleteById(id);
    }

    public void bookRoom(int id){
        Room room = roomRepository.findById(id).get();
        room.setStatus("BOOKED");
        roomRepository.save(room);
    }

    public List<Room> getRooms(String email){
        Admin admin = adminRepository.findByEmail(email);
        return roomRepository.findByAdminId(admin.getId());
    }

}
