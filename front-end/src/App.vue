<template>
  <div id="app">
    <!-- sticky-top / sticky-bottom -> 메뉴 바 고정하는 부트스트랩 -->
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
      id="mainNav"
    >
      <div class="container">
        <a class="navbar-brand ml-0" href="/home">
          <img
            src="@/assets/Test2/img/appleicon.png"
            alt=""
            width="30"
            height="24"
          />
          Boseok
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse mr-0" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <!-- dropdown #1 시작 -->
            <li class="nav-item">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                About
              </a>
              <div class="dropdown">
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <router-link to="/home" class="dropdown-item">
                    Home
                  </router-link>
                  <router-link to="/complainss" class="dropdown-item">
                    Complain
                  </router-link>
                </div>
              </div>
            </li>
            <!-- dropdown #1 끝 -->

            <!-- dropdown #2 시작 -->
            <li class="nav-item">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Tutorial
              </a>
              <div class="dropdown">
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <router-link to="/tutorials" class="dropdown-item">
                    Tutorials
                  </router-link>
                  <router-link to="/add" class="dropdown-item">
                    Add
                  </router-link>
                  <router-link to="/upload" class="dropdown-item">
                    Upload Image
                  </router-link>
                </div>
              </div>
            </li>
            <!-- dropdown #2 끝 -->

            <!-- dropdown #3 시작 -->
            <li class="nav-item">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Customer Manager
              </a>
              <div class="dropdown">
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <router-link to="/customers" class="dropdown-item">
                    Customer List
                  </router-link>
                  <router-link to="/add-customer" class="dropdown-item">
                    Add New Customer
                  </router-link>
                </div>
              </div>
            </li>
            <!-- dropdown #3 끝 -->

            <!-- dropdown #4 시작 -->
            <li class="nav-item">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Complain Menu
              </a>
              <div class="dropdown">
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <router-link to="/complains" class="dropdown-item">
                    Complain List
                  </router-link>
                  <router-link to="/add-complains" class="dropdown-item">
                    Add new Complain
                  </router-link>
                </div>
              </div>
            </li>
            <!-- dropdown #4 끝 -->

            <!-- dropdown #5 시작 -->
            <li class="nav-item">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                자유게시판
              </a>
              <div class="dropdown">
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <router-link to="/freeboards" class="dropdown-item">
                    자유게시판 목록
                  </router-link>
                  <router-link to="/add-freeboard" class="dropdown-item">
                    글쓰기
                  </router-link>
                </div>
              </div>
            </li>
            <!-- dropdown #5 끝 -->

            <!-- dropdown #6 시작 -->
            <li class="nav-item">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                FAQ게시판
              </a>
              <div class="dropdown">
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <router-link to="/faqboards" class="dropdown-item">
                    FAQ 목록
                  </router-link>
                  <router-link to="/add-faqboard" class="dropdown-item">
                    글쓰기
                  </router-link>
                </div>
              </div>
            </li>
            <!-- dropdown #6 끝 -->
          </ul>
        </div>
      </div>
    </nav>
    <!-- nav 시작 -->
    <!-- <nav class="navbar navbar-expand navbar-dark bg-dark"> -->
    <!-- <router-link to="/" class="navbar-brand">
        bezkoder
      </router-link> -->
    <!-- div 시작 -->
    <!-- <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/tutorials" class="nav-link">
            Tutorials
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">
            Add
          </router-link>
        </li>
      </div> -->
    <!-- div 끝 -->
    <!-- </nav>  -->
    <!-- nav 끝 -->
    <router-view></router-view>
    <div class="container mt-3 mb-5">
      <a href="https://www.flaticon.com/free-icons/apple" title="apple icons"
        >Apple icons created by Freepik - Flaticon</a
      >
    </div>
    <div class="container">
      <!-- 위의 router-link 있는 메뉴 화면이 아래위치에 표시 -->
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>
