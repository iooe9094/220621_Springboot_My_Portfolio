<template>
  <div class="container mt-5 pt-5">
    <div>
      <h1>Complains List</h1>
      <br />
    </div>
    <div id="content">
      <table class="table table-striped table-bordered">
        <thead class="thead-dark">
          <tr>
            <th scope="col">No</th>
            <th scope="col">제목</th>
            <th scope="col">Complain 내용</th>
            <th scope="col">대상<br />페이지</th>
            <th scope="col">작성자</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>현재시각불량</td>
            <td>
              현재 시각에 시간이<br />
              1초마다 나오지 않아요
            </td>
            <td>Home메뉴</td>
            <td>홍길동</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>이미지불량</td>
            <td>
              작은 사진 이미지를 클릭하면 <br />
              그 이미지로 큰사진 이미지가 <br />
              바뀌지 않아요
            </td>
            <td>컵 소개 메뉴</td>
            <td>홍길동</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>상세설명불량</td>
            <td>
              상세설명을 클릭하면 <br />
              상세설명이 나오지 않아요
            </td>
            <td>컵 소개 메뉴</td>
            <td>홍길동</td>
          </tr>

          <tr>
            <th scope="row">4</th>
            <td>테이블색상미적용</td>
            <td>
              Complain테이블에 backgroud-color를<br />
              홀수면 white<br />
              짝수면 gray색으로 보이게 해주세요
            </td>
            <td>Complain메뉴</td>
            <td>홍길동</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>전체완료기능추가</td>
            <td>
              Complain테이블의 완료여부 컬럼에<br />
              체크박스를 추가하고<br />
              체크박스를 체크하면 모든 미완료를<br />
              완료로 바꾸어서 화면에 <br />
              보이게 해주세요
            </td>
            <td>Complain메뉴</td>
            <td>홍길동</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>회원가입페이지없음</td>
            <td>
              메뉴에 회원가입페이지가 없어요<br />
              About메뉴에 추기하고<br />
              주민등록번호 유효성체크기능을<br />
              추가해주세요<br />
              (입력박스2개,중간(-):첫입력 6자리만<br />
              두번째입력 7자리만 입력가능<br />
              숫자만 가능)
            </td>
            <td>컵 소개 메뉴</td>
            <td>홍길동</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>제목 / 메뉴 고정</td>
            <td>스크롤 시 제목 / 메뉴 고정해 주세요</td>
            <td>컵 소개 메뉴</td>
            <td>홍길동</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>
              오른쪽 메뉴에 포털<br />
              링크 추가
            </td>
            <td>오른쪽 메뉴에 구글/네이버/다음 <br />추가해 주세요</td>
            <td>모든 페이지</td>
            <td>홍길동</td>
          </tr>
          <tr>
            <th scope="row">9</th>
            <td>사이트 개선</td>
            <td>
              as-is : 현재사이트 <br />to-be: Vue : header, nav, content,
              footer컴포넌트 적용
            </td>
            <td>메인 페이지</td>
            <td>홍길동</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
</script>
