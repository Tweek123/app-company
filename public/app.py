from flask import Flask, render_template, url_for,session, flash, redirect, request, make_response, jsonify
import vk_api
import requests
import json

friendsInfo = list()


app = Flask(__name__)
access_token = ''
user_ids = ''

@app.route("/",  methods=['GET'])

def Home():
    s = 'home'
    return s