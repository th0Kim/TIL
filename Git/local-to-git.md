### 2018.06.05
### local에서 Git으로 업로드
1. local에서 프로젝트 파일 생성(git.html, git.css sample 파일 생성)
2. VSCODE 해당 폴더 열기 (cmd - I:\gitExample\)
3. 터미널에서 해당 폴더에 git init (gitExample 폴더에 신규 파일 생성)
4. git status (빨간색의 파일명들은 commit되지 않음)
5. git add . (파일에 들어있는 html,css 등 추가 - git status의 파일들이 commit 가능한 뜻의 초록색으로 변경됨)
6. git config --global user.email "내 메일"
7. git config --global user.name "내 이름"
8. 위 6,7의 정보를 등록해야 commit이 됨
9. git commit -m "first commit" (commit 코멘트 입력)
10. git에서 New repository 생성
11. 10.에서 새로 만든 repository "clone or download" git주소 복사
12. VSCODE로 돌아와 터미널에 git remote add origin git주소
13. git remote (origin이 등록된걸 알수있다)
14. git pull origin master ()
15. git push origin master (git에 업로드)



사용 명령어
git status
git remote add 이름 주소
git remote -v
git remote
git remote remove 이름
git log
