## 노션 참고

1. 블록요소
   1. auto는 부모 요소 크기만큼 너비가 자동으로 늘어남
      1. 별도의 너비를 지정하지 않으면 부모의 크기만큼만 너비를 가짐
2. 인라인요소
   1. auto로 하면 내용 크기만큼만 너비가 지정됨
   2. span은 가로 세로 사이즈를 가질 수 없음
   3. 글자를 위한 요소이기 때문에 크기는 적용 안됨
3. css 단위
   1. px: 디바이스에 따른 절대 단위. 점하나
   2. %: 상대적 백분율
   3. em: 요소의 글꼴 크기
      1. 기본 글꼴은 16px 이고 별도 크기를 지정하지 않았을 때 20em이라고 하면 320px 이라는 의미
      2. 해당 요소마다 별도 폰트크기를 지정하면 유동적으로 바뀔 수 있음. 그래서 rem을 사용하는 것이 더 나음
   4. rem: 루트요소(html)의 글꼴 크기
      1. html 에 기본으로 적용된 16px을 보통 사용함
   5. vw: 뷰포트 가로 너비의 백분율
      1. 뷰포트는 브라우저 전체 영역
   6. vh: 뷰포트 세로 너비의 백분율
4. 테두리
   1. 테두리는 두께 종류 색상 순서로 작성
5. box-sizing

   1. border-box 속성값을 주면 테두리까지 함께 계산
   2. 마진, 패딩도 다 포함해서 사이즈를 잡음.
      1. 컨텐츠 부분이 많이 줄어듦.
   3.

   ```jsx
   box-sizing: border-box;
   ```

6. overflow
   1. visible
      1. 넘친 내용을 그대로 보여줌
   2. hidden
      1. 넘친 내용을 잘라냄
   3. scroll
      1. 넘친 내용 잘라내고 스크롤바 생성
   4. auto
      1. 넘친 내용이 있는 경우에만 잘라내고 스크롤바 생성
      2. 스크롤바 적용하려면 auto로
7. display 속성
   1. block
      1. 상자 요소
      2. 가로, 세로 크기 지정 가능
   2. inline
      1. 글자 요소
      2. 가로, 세로 너비를 지정할 수 없음
   3. inline-block
      1. 글자+상자 요소
         1. 가로, 세로 크기 지정 가능
   4. flex
      1. 1차원 레이아웃
   5. grid
      1. 2차원 레이아웃
   6. none
      1. 화면에서 사라짐
8. opacity
   1. 1에 가까울 수록 불투명
9. 글꼴
   1. 글자크기 기본은 16px
   2. font-weight: 두께
   3. 글꼴은
      1. font-family: 글꼴1, 글꼴2, ... 글꼴계열
         1. 글꼴계열은 필수로 작성
         2. sans-serif: 고딕계열(가장 많이 씀)
10. 문자
    1. 문자는 기본으로 인라인 요소
    2. 블록요소로 하고 싶으면 display:block
    3. 폰트크기: font-size
    4. 폰트 색깔: color
11. 배경
    1. 배경색 지정
       1. background-color
    2. 배경이미지 지정
       1. background-image: url("경로");
       2. 배경색이 있으면 이미지 뒤에 깔림
       3. 이미지 반복 설정
          1. background-repeat:
             1. repeat : 반복
             2. no-repeat: 반복 없음
       4. 이미지 위치
          1. background-position:
             1. top right: 우측상단에 위치함
             2. center: 정가운데
             3. 100px 30px : 왼쪽에서 100, 위쪽에서 30 떨어진 지점에 위치
       5. 이미지 크기
          1. background-size:
             1. auto: 이미지 실제 크기
             2. cover: 비율 유지하면서 가로세로 중 넓은쪽으로 맞춤
             3. contain: 비율 유지하면서 가로세로 중 짧은쪽으로 맞춤
       6. 이미지 스크롤 특성
          1. background-attachment:
             1. scroll: 이미지가 스크롤을 따라서 올라가고 내려감
             2. fixed: 스크롤 움직임에 따라 이미지 보이는 부분이 달라짐
12. 배치
    1. position(요소의 위치 지정 기준)
       1. top, bottom, left, right, z-index 속성을 쓸 수 있다.
          1. auto: 브라우저가 계산
          2. px, em, rem 단위 사용 가능
       2. static
          1. 기준 없음.
          2. 배치를 할 수 없음
       3. relative

          1. 요소 자신을 기준
          2. 원래 자기가 있어야할 위치를 기준으로 배치됨
          3. 기존 자기가 있던 공간은 비어있게 됨
             1. 따라서 relative로 요소를 배치하는건 거의 하지 않음.

          ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3d96cf0d-4356-4c5e-9d0d-4046e6feced3/Untitled.png)

       4. absolute

          1. 위치상 부모 요소 기준
          2. 부모 요소를 꼭 확인해야 함.
             1. 부모를 지정하지 않으면 뷰표트가 부모 요소가 될 수 있음
             2. 보통 부모요소에 position: relative를 줌.
             3. 부모요소가 position: static이면 무시됨.
                1. 포지션을 사용하지 않는 것과 같음.
          3. 가장 많이 사용함
          4. 아래는 부모의 부모가 있을 때 부모에 static 줬을 때

          ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d63f3792-192f-40f1-ab67-28d0dea0b1e9/Untitled.png)

       5. fixed
          1. 뷰포트(브라우저) 기준
          2. 헤더나 배너 같은걸 스크롤 움직여도 고정할 때 사용
       6. sticky
          1. 배치 보다는 스크롤 기준
    2. 요소 쌓임 순서
       1. position 속성 값이 있으면 위에 쌓임(기본값인 static 제외)
       2. 위의 조건이 같다면 z-index 값이 높을 수록 위에 쌓임
       3. 위의 두 조건이 모두 같다면 html의 다음 구조일 수록 위에 쌓임.
          1. 나중에 작성된 요소가 위에 쌓인다.
       4. 위의 조건이 다 맞아야 가장 위에 쌓임. 단순히 z-index 값을 999만 준다고 제일 위에 쌓이지 않음.
    3. z-index
       1. -1,0, 그리고 양수를 주로 사용
       2. 쌓임 순서 예시 1

          ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/845e14ed-cb27-48af-98f0-99c32798ebda/Untitled.png)

       3. 쌓임 순서 예시 2

          ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7cc5b04d-65f8-493b-88a8-62199fdb5d49/Untitled.png)
    4. absolute, fixed 적용되면 display 속성이 block으로 됨
       1. span 등에 적용하면 block요소가 됨
13. 플렉스(flex)
    1. 1차원 레이아웃
    2. flex container
       1. flex 요소의 부모는 flex container라고 부름
       2. 부모요소에 flex를 지정해야 요소들에 flex가 지정됨
       3. 사용하는 속성
          1. display
             1. flex: 블록요소 처럼 flex container 정의
                1. container의 너비가 최대한 늘어남
             2. inline-flex: 인라인요소 처럼 flex container 정의
                1. flex container 여러 개를 한줄에 표현할 수 있음(인라인 요소라)
                2. 너비를 최소로 사용함(내부 요소에 딱 맞게만)
          2. flex-flow
          3. flex-direction
             1. 주 축을 설정
             2. row: 좌에서 우로
             3. row-reverse: 우에서 좌로
          4. flex-wrap:

             1. nowrap : 묶음 없음. 기본값
                1. 요소들이 사이즈가 있어도 한줄에 표현되다 보면 줄어들 수 있음
             2. wrap: 줄바꿈
                1. 사이즈가 넘어가면 알아서 줄바꿈
             3.

             ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d0cb2dc4-7fe1-44a8-a299-b00feec8ce98/Untitled.png)

          5. justify-content:
             1. 주 축의 정렬방법 결정
             2. flex-start : flex items를 시작점으로 정렬
             3. flex-end : flex items를 끝점으로 정렬
             4. center : flex items를 가운데 정렬
             5. ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5e4de52b-b7f1-46cc-9e41-efa841ebd6fe/Untitled.png)
          6. align-content:
             1. 교차 축의 여러 줄 정렬방법
             2. 주축이 가로일 때 세로줄 정렬
             3. item이 두줄 이상으로 표현이 돼야 적용 가능함.
             4. 조건이 까다로워 많이 사용하지는 않음.
             5. stretch : flex items를 시작점으로 정렬
             6. flex-start : flex items를 시작점으로 정렬
             7. flex-end : flex items를 끝점으로 정렬
             8. center : flex items를 가운데 정렬

                ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ad99799a-9157-4614-af27-1f3e08fc1319/Untitled.png)

                ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c59ab2e1-7f41-40b8-a394-6369af68f136/Untitled.png)

             9.
          7. align-items
             1. 교차 축의 한 줄 정렬 방법
             2. 많이 사용하는 방식
             3. stretch : flex items를 시작점으로 정렬
             4. flex-start : flex items를 시작점으로 정렬
             5. flex-end : flex items를 끝점으로 정렬
             6. center : flex items를 가운데 정렬
             7. ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dff5894c-3e95-43a7-b2c8-f2159858d4d7/Untitled.png)

                ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/546f945d-3b1f-4be2-bf64-805f53a93d49/Untitled.png)

             8.
    3. flex items
       1. flex 요소는 flex items라고 부름
       2. 여기 내용은 container가 아니라 items에 부여하는 속성
       3. 사용하는 속성
          1. order
             1. 숫자가 작을 수록 먼저 나옴
             2. 구조 바꾸지 않아도 순서 바꿀 수 있음
             3. 기본값은 0

                ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fd59b20a-3e2b-43fa-a002-ed9aeebedb7c/Untitled.png)

             4.
          2. flex
          3. flex-grow
             1. items 요소가 늘어나는 비율
             2. 0이면 증가하는 비율 없음
             3. 1을 주면 균등한 가로 비율을 가짐

                ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/144c833a-7be0-4f1f-bf3f-88166de94e15/Untitled.png)

             4.
             5.
          4. flex-shrink
             1. items 요소의 감소 너비 비율
             2. container 너비가 줄면 요소들의 너비도 줄어듦
             3. 기본값 1

                ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e7c06b53-6708-4202-a0f9-c86b10344c18/Untitled.png)

             4.
             5.
          5. flex-basis

             1. items의 공간 배분 전 기본 너비
             2. 기본값 auto
             3. px,em,rem으로 지정
             4. 작성한 텍스트에 따라 비율이 바뀔수가 있어서 값을 0으로 주면 각 요소의 크기 비율로 배치 가능

             ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fe4808f1-f119-4c4b-a183-ab49426eb0ea/Untitled.png)

          6. align-self
