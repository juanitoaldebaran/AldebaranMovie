package com.project.AldebaranMovie.service;

import com.project.AldebaranMovie.exception.UserHasAlreadyExist;
import com.project.AldebaranMovie.exception.UserNotFound;
import com.project.AldebaranMovie.models.LoginUser;
import com.project.AldebaranMovie.models.RegisterUser;
import com.project.AldebaranMovie.models.User;
import com.project.AldebaranMovie.repository.AuthRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Optional;

@Service
public class AuthService {
    private final AuthRepository authRepository;

    private final PasswordEncoder passwordEncoder;

    private final AuthenticationManager authenticationManager;

    @Autowired
    public AuthService(
            AuthRepository authRepository,
            AuthenticationManager authenticationManager,
            PasswordEncoder passwordEncoder
    ) {
        this.authenticationManager = authenticationManager;
        this.authRepository = authRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public User signup(RegisterUser input) {
        Optional<User> existingUser = authRepository.findUserByEmail(input.getEmail());
        if (existingUser.isPresent()) {
            throw new UserHasAlreadyExist("User with email " + input.getEmail() + " already exists");
        }

        Date now = new Date();
        User user = new User()
                .setFullName(input.getFullName())
                .setEmail(input.getEmail())
                .setPassword(passwordEncoder.encode(input.getPassword()))
                .setCreatedAt(now)
                .setUpdatedAt(now);

        return authRepository.save(user);
    }


    public User authenticate(LoginUser input) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            input.getEmail(),
                            input.getPassword()
                    )
            );

            return (User) authentication.getPrincipal();
        } catch (BadCredentialsException e) {
            throw new UserNotFound("Invalid email or password");
        }

    }
}
