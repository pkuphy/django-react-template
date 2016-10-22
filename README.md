启动

1. 前端
cd reactjs
yarn  # 安装依赖
yarn dev  # 进入开发环境

2. 后端

cd django
mkvirtualenv dj-react
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver_plus 8000


打开浏览器 http://localhost:8000
