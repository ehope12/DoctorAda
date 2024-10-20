from app import app  # Replace 'your_application' with the name of your Flask application module
from models import db

# Drop all tables
db.drop_all()  # This will drop all tables

# Recreate all tables
db.create_all()  # This will recreate all tables based on your models

print("Database has been reset.")
