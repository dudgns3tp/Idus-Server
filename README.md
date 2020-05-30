# Idus-Server

### 

| 메소드 | 경로                                        | 설명      |
| ------ | ------------------------------------------- | --------- |
|GET    | /item/minPrice/maxPrice| 최소금액 최대금액 설정해서 아이템 조회하기|


### ㅤ
## Request Header

```json
{
    "Content-Type": "application/json"
}
```

### ㅤ
## Request Body

```json
{

}
```
* minPrice :3000 (INTEGER)
* maxPrice :10000(INTEGER)


#### ㅤ
## Response

### Response Datatype
```json
"data":[
    {
        "itemIdx":INT,
        "item_name":STRING,
        "item_price":INT,
        "item_img":STRING,
        "item_likes":Boolean,
        "item_rating":STRING
    }
]
```

### < Success >
```json
{
    "status": 200,
    "success": true,
    "message": "아이템 가져오기 성공",
    "data": [
        {
            "itemIdx": 3,
            "item_name": "터틀 딸기 초콜릿",
            "item_price": 8700,
            "item_img": "https://image.idus.com/image/files/f7e758928cdf40dc923d55c310c8d636_1440.png",
            "item_likes": 0,
            "item_rating": "3.2"
        },
        {
            "itemIdx": 12,
            "item_name": "강아지 수제 간식 씹는맛 닭가슴살 져키",
            "item_price": 4800,
            "item_img": "https://image.idus.com/image/files/c1743a69aa914c35ab44d2e8ce2765f8_1440.jpg",
            "item_likes": 0,
            "item_rating": "1.5"
        },
        {
            "itemIdx": 15,
            "item_name": "농부 고추장아찌 무침",
            "item_price": 6300,
            "item_img": "https://image.idus.com/image/files/31ef1802b5d840ff88397ac2e2fe71f8_1440.jpg",
            "item_likes": 0,
            "item_rating": "4.3"
        }
    ]
}
```


```json
{
    "status": 200,
    "success": true,
    "message": "아이템 가져오기 성공",
    "data": []
}
```
>알맞게 넣었지만 필터링된 데이터가 없을때!



#### ㅤ
### < Fail >

- 데이터 누락 
```json
{
    "status": 400,
    "success": false,
    "message": "필요한 값이 없습니다."
}
```

- 데이터 타입 오류
```json
{
    "status": 400,
    "success": false,
    "message": "파라미터 값이 잘못되었습니다"
}
```
### ㅤ
### ㅤ