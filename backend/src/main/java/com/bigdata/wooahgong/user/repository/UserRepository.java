package com.bigdata.wooahgong.user.repository;

import com.bigdata.wooahgong.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUserId(String userId);
    Optional<User> findByEmail(String email);
    Optional<User> findByNickname(String nickname);
    Optional<String> findEmailByUserId(String userId);
    List<User> findUsersByNicknameContaining(String searchWord);
}
