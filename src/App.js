import React from "react";
import "./App.css";

function App() {
    const stacks = [
        "Linux · 서버 인프라",
        "DevOps · CI/CD",
        "Docker · Kubernetes",
        "AWS · 클라우드",
        "Monitoring · Automation",
    ];

    const links = [
        { label: "GitHub", url: "https://github.com/b1ackc" },
        { label: "Tech Blog", url: "#" },
        { label: "Contact", url: "mailto:you@example.com" },
    ];

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="page">
            <header className="header">
                <div className="logo-area">
                    <div className="logo-circle">BC</div>
                    <div className="logo-text">
                        <span className="logo-name">BlackC</span>
                        <span className="logo-role">System · DevOps Engineer</span>
                    </div>
                </div>

                <nav className="nav">
                    <button className="nav-btn" onClick={() => scrollToSection("top")}>
                        Home
                    </button>
                    <button className="nav-btn" onClick={() => scrollToSection("about")}>
                        About
                    </button>
                    <button className="nav-btn" onClick={() => scrollToSection("stack")}>
                        Stack
                    </button>
                </nav>
            </header>

            <main className="content" id="top">
                {/* HERO */}
                <section className="hero">
                    <div className="hero-left">
                        <p className="hero-tag">INTRODUCTION</p>
                        <h1 className="hero-title">안정성을 설계하는 엔지니어, BlackC</h1>
                        <p className="hero-subtitle">
                            인프라와 자동화를 통해
                            <br />
                            <strong>“문제가 덜 생기고, 생겨도 빨리 복구되는 환경”</strong>을 만드는 것을 좋아합니다.
                        </p>

                        <p className="hero-description">
                            서버, 네트워크, CI/CD, 모니터링 등 운영 전반을 하나의 흐름으로 바라보고
                            <br />
                            반복과 수동 작업을 줄여 팀이 더 중요한 문제에 집중할 수 있게 돕는 것이 목표입니다.
                        </p>

                        <div className="hero-actions">
                            <button
                                className="btn-outline"
                                onClick={() => scrollToSection("about")}
                            >
                                BlackC 소개 더 보기
                            </button>
                        </div>
                    </div>

                    <div className="hero-right">
                        <div className="profile-card">
                            <div className="profile-header">
                                <div className="profile-avatar">BC</div>
                                <div>
                                    <p className="profile-name">BlackC</p>
                                    <p className="profile-title">System / DevOps Engineer</p>
                                </div>
                            </div>

                            <div className="profile-body">
                                <p>• 온프레 인프라 및 서버 운영 경험</p>
                                <p>• CI/CD 파이프라인 구축 및 개선</p>
                                <p>• 현재 페이지는 CICD 테스트용 페이지입니다 - TEST002</p>
                            </div>

                            <div className="profile-tags">
                                <span>안정성</span>
                                <span>자동화</span>
                                <span>문제 해결</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ABOUT */}
                <section id="about" className="section">
                    <div className="section-header">
                        <h2>About BlackC</h2>
                        <p>문제의 원인을 끝까지 따라가고, 구조적으로 개선하는 것을 좋아합니다.</p>
                    </div>

                    <div className="grid-3">
                        <div className="card">
                            <h3>문제 해결 방식</h3>
                            <p>
                                단순히 “에러를 없애는 것”이 아니라{" "}
                                <strong>근본 원인 분석 → 재발 방지 → 구조 개선</strong>까지 연결해서 봅니다.
                            </p>
                            <p>
                                같은 문제가 다시 발생하지 않도록, 로그/모니터링/알림을 함께 설계하며
                                운영자가 상황을 빠르게 파악할 수 있는 상태를 만드는 데 집중합니다.
                            </p>
                        </div>

                        <div className="card">
                            <h3>좋아하는 일</h3>
                            <ul>
                                <li>수동/반복 작업을 스크립트나 도구로 대체하기</li>
                                <li>CI/CD 파이프라인을 설계하고 점진적으로 개선하기</li>
                                <li>복잡한 인프라 구성을 단순한 그림과 문서로 정리하기</li>
                                <li>“왜?”라는 질문을 끝까지 가져가 보는 것</li>
                            </ul>
                        </div>

                        <div className="card">
                            <h3>지향점</h3>
                            <p>
                                팀이 장애 대응보다는 <strong>서비스 개선과 고객 경험</strong>에 더 많은 시간을 쓸 수 있게
                                만드는 것이 목표입니다.
                            </p>
                            <p>
                                “잘 버티는 인프라”, “예측 가능한 운영”, “재현 가능한 환경”이라는 세 가지 키워드를
                                기준으로 시스템을 바라보고자 합니다.
                            </p>
                        </div>
                    </div>
                </section>

                {/* STACK */}
                <section id="stack" className="section">
                    <div className="section-header">
                        <h2>Tech Stack & Interests</h2>
                        <p>실제로 다뤄본 것과 깊게 파고들고 있는 영역입니다.</p>
                    </div>

                    <div className="stack-list">
                        {stacks.map((item) => (
                            <span key={item} className="stack-pill">
                {item}
              </span>
                        ))}
                    </div>

                    <div className="link-row">
                        {links.map((link) => (
                            <a
                                key={link.label}
                                href={link.url}
                                className="link-card"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span>{link.label}</span>
                                <span className="arrow">↗</span>
                            </a>
                        ))}
                    </div>
                </section>
            </main>

            <footer className="footer">
                © {new Date().getFullYear()} BlackC · System / DevOps Profile
            </footer>
        </div>
    );
}

export default App;
