package com.project.AldebaranMovie.controller;

import com.project.AldebaranMovie.models.LoginResponse;
import com.project.AldebaranMovie.models.LoginUser;
import com.project.AldebaranMovie.models.RegisterUser;
import com.project.AldebaranMovie.models.User;
import com.project.AldebaranMovie.service.AuthService;
import com.project.AldebaranMovie.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/auth")
@RestController
public class AuthController {
    private final AuthService authService;

    private final JwtService jwtService;

    @Autowired
    public AuthController(AuthService authService, JwtService jwtService) {
        this.jwtService = jwtService;
        this.authService = authService;
    }

    @PostMapping("/signup")
    public ResponseEntity<User> register(@RequestBody RegisterUser registerUser) {
        User registeredUser = authService.signup(registerUser);

        return new ResponseEntity<>(registeredUser, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> authenticate(@RequestBody LoginUser loginUser) {
        User authenticatedUser = authService.authenticate(loginUser);

        String jwtToken = jwtService.generateToken(authenticatedUser);

        LoginResponse loginResponse = new LoginResponse().setToken(jwtToken).setExpiresIn(jwtService.getJwtExpiration());

        return new ResponseEntity<>(loginResponse, HttpStatus.OK);
    }
}
