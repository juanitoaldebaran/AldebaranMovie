package com.project.AldebaranMovie.repository;

import com.project.AldebaranMovie.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AuthRepository extends JpaRepository<User, Long> {
    Optional<User> findUserByEmail(String email);
}
