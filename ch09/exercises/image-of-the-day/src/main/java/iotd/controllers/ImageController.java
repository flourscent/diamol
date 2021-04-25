package iotd;

import io.micrometer.core.annotation.Timed;
import io.micrometer.core.instrument.MeterRegistry;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class ImageController {

    private static final Logger log = LoggerFactory.getLogger(ImageController.class);

	@Autowired
	CacheService cacheService;

    @Autowired
    MeterRegistry registry;
    
    @Value("${apod.url}")
	private String apodUrl;
    
    @Value("${apod.key}")
	private String apodKey;

    @RequestMapping("/image")
    @Timed()
    public Image get() {
        log.debug("** GET /image URL이 호출됨"); 

        Image img = cacheService.getImage();
        if (img == null) {
            RestTemplate restTemplate = new RestTemplate();
            ApodImage result = restTemplate.getForObject(apodUrl+apodKey, ApodImage.class);

            log.info("APOD 서비스에서 새로운 이미지를 내려받음"); 
            registry.counter("iotd_api_image_load", "status", "success").increment();

            img = new Image(result.getUrl(), result.getTitle(), result.getCopyright());            
            cacheService.putImage(img);
        }
        else {
            log.debug("캐시에 저장된 천문 사진을 사용함");             
            registry.counter("iotd_api_image_load", "status", "cached").increment();
        }
        return img;
    }
}
