# Today I learn.
# WAI-ARIA

#### 2018.05.28
#### 2018.06.10

## WAI-ARIA정의
: HTML5에서 도입한 role속성을 통해 페이지의 모든 요소에 '역할'을 주며 '스크린리더'가 쉽게 페이지를 분석하고 모든 역할을 분류해 페이지의 색인을 만들 수 있다.

  ## Role
    - 특정 요소(Element)에 역할을 정의하는 것
    - 역할을 부여하여 사용자에게 정보를 제공
    - 부여된 역할은 동적으로 변경할 수 없음
    - 사용방법 : <div class="user_manu" role="menu">...</div>

  ### 표지판(landmark) 역할
    - banner : 페이지의 배너 영역 (눈에 잘 띄게 걸어놓는 것 ex.header)
    - search : 페이지의 검색 영역 (ex. search Bar)
    - navigation : 페이지의 내비게이션 요소 (ex. nav)
    - main : 페이지의 주된 내용이 시작함 (ex. main)
    - contentinfo : 저작권 정보, 발행일 등 내용에 대한 정보가 있는 곳 (ex. footer)
    - complementary : 페이지의 주된 내용을 보충하지만, 자체로도 의미 있는 내용 (ex. aside)
    - application : 웹 어플리케이션을 담고 있는 영역

  * HTML5 태그 <main>가 IE에 지원할 때까지 <main role="main">으로 사용한다.

  ### 문서 구조 역할
    - document : 문서 내용을 담는 영역, application 내용과는 구별됨 (ex. body)
    - article : 독립적인 부분을 형성함
    - definition : 어떤 개념이나 주제를 정의함
    - directory : 그룹을 참조하는 목록을 나타냄, 정적인 내용(ex. ul목록을 감쌈)
    - heading : 절의 제목
    - img : 이미지, 이미지를 설명하는 텍스트나 캡션
    - list : 상호 작용성이 없는 리스트 아이템의 그룹
    - listitem : 상호 작용성이 없는 리스트 아이템 구성
    - math : 수학 표현
    - note : 주된 내용에 대한 삽입구 또는 그를 보충하는 내용
    - presentation : 보조 기술에서 무시해도 괜찮은 표현적 요소 
    - row : 표 형태의 데이터(그리드)에서 한 행
    - rowheader : 행의 헤더 정보를 담고 있는 셀

  ## 속성 Properties & 상태 States
      – 요소(Element)가 기본적으로 갖고 있는 특징이나 상황 
      – 속성과 상태는 “aria-*” 접두어를 가진다. 
      – 상태는 요소의 상황을 나타내므로 애플리케이션이 실행 중에 자주 바뀌는 반면, 속성은 상대적으로 바뀌는 경우가 드물다. 

  ### 속성
    - 필수 항목 속성 aria-required
      사용방법 : <input  type="checkbox"  aria‐required="true" />
      
    - 추가 설명 속성 aria‐describedby
      사용방법 : <input  type="text"  aria-describedby="reference"> <div  id="reference">추가설명</div> 
      
    - 그룹 제목 속성 aria-label
      사용방법 : <div  role="group"  aria‐label="그룹제목">...</div>

  ### 상태
     - 확장되어 있는 상태의 탭패널 aria‐expanded="true"
       사용방법 : <div  role="tabpanel"  aria‐expanded="true">...</div>
       
     - 오류가 발생한 상태의 입력상자 aria-invalid="true"
       사용방법 : <input  type="text"  aria-invalid="true" /> 
       
     - 선택된 상태의 토글버튼 aria‐pressed="true"
       사용방법 : <button  aria‐pressed="true">...</button> 

       


#### WAI-ARIA 사례
link : https://github.com/niawa/ARIA

#### WAI-ARIA 호환성
link : https://caniuse.com/#search=wai-aria

*출처 : 2016 정보접근성 기술 컨퍼런스
