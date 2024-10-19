from flask import Flask
from dotenv import load_dotenv
from flask_cors import CORS
from search import search_bp
from models import db, User, Post, Comment
from flask_migrate import Migrate
from forum import forum_bp

app = Flask(__name__)
CORS(app)
load_dotenv()

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///forum.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
migrate = Migrate(app, db)

app.register_blueprint(search_bp, url_prefix='/search')
app.register_blueprint(forum_bp, url_prefix='/forum')

if __name__ == '__main__':
    app.run(debug=True)

# For testing purposes:
# You can run the backend by running the following command in the terminal:
# python app.py
# In order to test the search functionality, follow the format below:
# http://127.0.0.1:5000/search/?query=machine+learning&num_results=5
# In order to test the forum functionality, follow the format below:
# http://127.0.0.1:5000/forum/posts