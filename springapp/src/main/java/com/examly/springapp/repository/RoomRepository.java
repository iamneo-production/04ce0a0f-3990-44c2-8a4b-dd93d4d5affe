package com.examly.springapp.repository;

import com.examly.springapp.model.Room;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface RoomRepository extends CrudRepository<Room, Integer> {

    List<Room> findByAdminId(int adminId);
    @Modifying
    @Query(
            value = "update room u set u.room_no=?1,u.price=?2,u.type=?3 where u.id=?4",
            nativeQuery = true
    )
    void setAdmin(String roomNo, String price, String type,Integer id);

}