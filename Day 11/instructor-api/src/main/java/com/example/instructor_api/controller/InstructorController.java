package com.example.instructor_api.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/api/instructors")
@CrossOrigin(origins = "http://localhost:5173") // Pastikan port ini sama dengan Vite anda
public class InstructorController {

    @GetMapping
    public List<String> getInstructors() {
        return List.of("Instructor Ahmad", "Instructor Siti", "Instructor Ali");
    }
}