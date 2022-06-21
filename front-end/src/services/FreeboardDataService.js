import http from "../http-common";

// springboot 연결하기 위한 메소드 정의
class FreeboardDataService {
  // 모든 회원 조회
  // TODO: getAll() -> getAll(params)
  getAll(params) {
    return http.get("/freeboards", { params });
  }
ß
  //    id로 회원 조회
  get(id) {
    return http.get(`/freeboards/${id}`);
  }

  //    회원 데이터를 생성(insert 문 호출)
  create(data) {
    return http.post("/freeboards", data);
  }

  //    회원 데이터를 수정 요청(update 문 호출)
  update(id, data) {
    return http.put(`/freeboards/${id}`, data);
  }

  //    회원 데이터를 삭제 요청(update 문 호출)
  delete(id) {
    return http.put(`/freeboards/deletion/${id}`);
  }
}

export default new FreeboardDataService();
