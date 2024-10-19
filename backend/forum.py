from flask import Blueprint, request, jsonify
from models import db, Post, Comment, User


forum_bp = Blueprint('forum_bp', __name__)

@forum_bp.route('/posts', methods=['POST'])
def create_post():
    data = request.get_json()
    title = data.get('title')
    content = data.get('content')
    user_id = data.get('user_id')

    if not title or not content:
        return jsonify({"error": "Title and content are required"}), 400
    
    user = User.query.filter_by(username=user_id).first()

    if user is None:
        new_user = User(username=user_id, password='default_password')
        db.session.add(new_user)
        db.session.commit()

        user = new_user

    new_post = Post(title=title, content=content, user_id=user_id)
    db.session.add(new_post)
    db.session.commit()

    return jsonify({"message": "Post created successfully", "post": {
        "title": new_post.title,
        "content": new_post.content,
        "user_id": new_post.user_id
    }}), 201

@forum_bp.route('/posts', methods=['GET'])
def get_posts():
    posts = Post.query.all()
    post_list = [{
        "id": post.id,
        "title": post.title,
        "content": post.content,
        "author": post.author.username if post.author else "Unknown",
        "date_posted": post.date_posted
    } for post in posts]

    return jsonify({"posts": post_list}), 200

@forum_bp.route('/posts/<int:post_id>/comments', methods=['POST'])
def add_comment(post_id):
    post = Post.query.get_or_404(post_id)
    data = request.get_json()
    content = data.get('content')
    user_id = data.get('user_id')

    if not content:
        return jsonify({"error": "Content is required"}), 400

    new_comment = Comment(content=content, post_id=post.id, user_id=user_id)
    db.session.add(new_comment)
    db.session.commit()

    return jsonify({"message": "Comment added", "comment": {
        "content": new_comment.content,
        "post_id": new_comment.post_id,
        "user_id": new_comment.user_id
    }}), 201
