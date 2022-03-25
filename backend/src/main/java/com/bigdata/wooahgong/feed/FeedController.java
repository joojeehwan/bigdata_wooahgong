package com.bigdata.wooahgong.feed;

import com.bigdata.wooahgong.feed.dtos.request.CreateFeedReq;
import com.bigdata.wooahgong.feed.entity.Feed;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/feed")
public class FeedController {
    private final FeedService feedService;

//    // 메인 - For me 피드 가져오기
//    @GetMapping("/forme")
//    public ResponseEntity<List<Feed>> getFeedsForMe(@RequestHeader("Authorization") String token) {
//        return new ResponseEntity<>(feedService.getFeedsForMe(token.split(" ")[1]), HttpStatus.OK);
//    }

    // 메인 - trend 피드 가져오기
    // 대문을 거치지 않고 둘러보게 하려면 여기랑 WebConfig 수정 ㄱㄱ
    @GetMapping("/trend")
    public ResponseEntity<List<Feed>> getFeedsTrend(@RequestHeader("Authorization") String token) {
        return new ResponseEntity<>(feedService.getFeedsTrend(token.split(" ")[1]), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<String> createFeed(@RequestHeader("Authorization") String token,
                                                 @RequestPart(value = "images", required = false) List<MultipartFile> images,
                                                 @RequestPart(value = "data") CreateFeedReq createFeedReq) {
        return new ResponseEntity<>(feedService.createFeed(token, images, createFeedReq), HttpStatus.OK);
    }


}