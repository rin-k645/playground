package com.ssafy.matching.controller;

import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/matching/hello")
public class HelloController {
    @GetMapping("")
    public String test() throws Exception {
        return "matchingServer - hello Controller 실행  ";
    }
}
