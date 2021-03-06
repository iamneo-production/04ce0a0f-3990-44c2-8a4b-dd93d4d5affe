package com.examly.springapp.service; 

import org.springframework.stereotype.Service;
import com.examly.springapp.model.User;
import com.examly.springapp.model.Admin;
import com.examly.springapp.model.Room;
import com.examly.springapp.model.Booking;
import com.examly.springapp.model.BookingData;

import com.examly.springapp.repository.AdminRepository;
import com.examly.springapp.repository.UserRepository;
import com.examly.springapp.repository.RoomRepository;
import com.examly.springapp.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;


@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private RoomService roomservice;

    public User userProfileEdit(User user){
        return userRepository.save(user);
    }

    public List<Admin> userDashboard(){
        return (List<Admin>)adminRepository.findAll();
    }

    public List<Room> hotelRooms(int id){

        return roomRepository.findByAdminId(id);

    }

    public Room roomDetails(int id){

        return roomRepository.findById(id).get();

    }

    public Booking userBookRoom(BookingData bookingData){
        Room room=roomRepository.findById(bookingData.getRoomId()).get();
        Admin admin = adminRepository.findById(room.getAdmin().getId()).get();
        Booking booking = new Booking();
        booking.setUserId(userRepository.findByEmail(bookingData.getEmail()).getId());
        booking.setRoomId(room.getId());
        booking.setRoomNo(room.getRoomNo());
        booking.setAdminId(room.getAdmin().getId());
        booking.setHotelAddress(room.getAdmin().getHotelAddress());
        booking.setHotelImageURL(room.getAdmin().getHotelImageURL());
        booking.setHotelName(room.getAdmin().getHotelName());
        booking.setPrice(room.getPrice());
        
        admin.setEarnings(admin.getEarnings()+Integer.parseInt(room.getPrice()));
        room.setStatus("BOOKED");
        roomRepository.save(room);
        adminRepository.save(admin);
        
        
        return bookingRepository.save(booking);
    }

    public List<Booking> userBookings(int userId){
        return bookingRepository.findByUserId(userId);
    }

    public User getUser(String email){
        return userRepository.findByEmail(email);
    }

    public User getUserById(int id){
        return userRepository.findById(id).get();
    }

}
