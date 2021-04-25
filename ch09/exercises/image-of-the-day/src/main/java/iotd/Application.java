package iotd;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class Application {

    @RequestMapping("/")
    public String home() {
        return "이 페이지는 내용이 없습니다. URL /image 에 접근하세요.";
    }

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
