from flask import Blueprint, request, jsonify
from pymed import PubMed

search_bp = Blueprint('search_bp', __name__)

def search_function(query, num_results=5):
    pubmed = PubMed()
    results = pubmed.query(query, int(num_results))
    articles_list = []
    for article in results:
        article_dict = article.toDict()
        title = article_dict.get("title")
        abstract = article_dict.get("abstract")
        publication_date = article_dict.get("pubdate")
        authors = [
            (author.get('firstname', '') or '') + ' ' + (author.get('lastname', '') or '')
            for author in article_dict.get('authors', [])
        ]
        articles_list.append({
            "title": title,
            "abstract": abstract,
            "publication_date": publication_date,
            "authors": authors
        })
    
    return articles_list

@search_bp.route('/', methods=['GET'])
def search():
    query = request.args.get('query')
    num_results = request.args.get('num_results', 5)
    if not query:
        return jsonify({"error": "No query provided"}), 400
    articles = search_function(query, num_results)
    return jsonify(articles), 200