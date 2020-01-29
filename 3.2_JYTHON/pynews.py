# C:\Users\simon\Documents\Programming_Challenge\3.2_JYTHON

# discontinued due to Netty Issues

import requests
from bs4 import BeautifulSoup
import webbrowser
import time
import csv
#from newspaper import Article
import threading
import datetime

# Function takes the parameter query as a search query for google news,
# and returns a list of the Top X results (where x=results) as dicts
# containing title, publisher and link
def googleNews(query, results=5):

    # Constants, revise when broken
    PARENT_DIV_CLASS = 'kCrYT'
    TITLE_DIV_CLASS = 'BNeawe vvjwJb AP7Wnd'
    PUBLISHER_DIV_CLASS = 'BNeawe UPmit AP7Wnd'
    print("in g_news")

    # Format according to Google Reqs
    query = '+'.join(query.split(" "))

    # Request Google News given params
    newsPage = 


    # Turn into parse tree using BS4
    newsSoup = BeautifulSoup(newsPage.text, features="html.parser")

    # Find all PARENT_DIV_CLASS of the search result containers
    resultDivs = newsSoup.find_all(class_ = PARENT_DIV_CLASS) #kCrYT finds 2 divs for each

    # Initialize variables
    links = [] # contains the links only
    articles = [] # list of dicts containing title, publisher and link
    num = 1 # counter for creating Top X ranking

    # Loop through parent containers
    for div in resultDivs:
        try:
            # Find link tag inside parent container
            link = div.find('a')

            # Get and format the link string
            link_ref = link.get('href')[7:] # eliminate =url? in beginning

            if link_ref.find('&') != -1: #check for &
                link_ref = link_ref[:link_ref.find('&')] #cut xtra str after &

            # Check for duplication
            if link_ref not in links:
                # Append link string to links list
                links.append(link_ref)

                # find title and publisher in parent container
                title = div.find(class_ = TITLE_DIV_CLASS).contents[0]
                publisher = div.find(class_ = PUBLISHER_DIV_CLASS).contents[0]

                # Print ranking to console
                # print(f"{num}. '{title}' by {publisher}")

                # Append dict containing title, publisher and link of article
                articles.append({
                    "title": title,
                    "publisher": publisher,
                    "link": link_ref
                })
                num += 1
        except Exception as e:
            pass # when issue is raised due to not finding link, do nothing

    # return the list of dicts: ENDOF googleNews()
    return articles

# Function takes parameters filename of target CSV output file
# (without extension .csv) and a list of dicts containing info about articles
# (default=title, publisher, link) and writes the info to the target file
def writeNewsCSV(filename, articles, query, headings=['title', 'publisher', 'link']):
    temp_articles = []
    for article in articles:
        temp_articles.append({key: article[key] for key in (article.keys() & headings)})
    articles = temp_articles
    # Open target output file
    with open('{}.csv'.format(filename), 'w', newline='') as csvfile:

        # Initialize dict writer given the headings
        writer = csv.DictWriter(csvfile, headings)

        # write heading
        writer.writeheader()

        # iterate through list of dicts and write dicts to csv file
        for article in articles:
            writer.writerow(article)

        # write query information
        writer.writerow({'title': 'QUERY:', 'publisher': query})

    return #ENDOF writeNewsCSV

# Function takes articles as well as optional delay and opens them in
# default browser (Chrome Recommended)
def openNews(articles, delay=.5):
    # Iterate through index in articles in reverse
    for index in reversed(range(len(articles))):

        # use webbrowser pkg to open the articles
        webbrowser.open(articles[index]['link'], new=0, autoraise=True)

        # delay to prevent lag with internet connection
        time.sleep(delay)
    return #ENDOF openNews

# Function takes in a list of dicts containing article information, and uses
# the newspaper3k pkg to add more information: authors, publish date, images,
# movies, raw text and body html, as well as NLP attributes such as summary
# and keywords
# def expandNews(articles):
#
#     # init list of Article objects
#     art_objs = []
#
#     # iterate through each dict in the list
#     for article in articles:
#
#         # create instance of Article given the link, and append to list
#         art_objs.append(Article(url=article['link'], keep_article_html=True))
#
#     # call function downloadArticles to download each article in parallel
#     art_objs = downloadArticles(art_objs)
#
#     # iterate through each article dict and Article object
#     for index in range(len(articles)):
#
#         # create temp vars for list values
#         a_dict = articles[index]
#         a_obj = art_objs[index]
#
#         # parse the Article object
#         a_obj.parse()
#
#         # add additional html info to dict
#         a_dict["authors"] = a_obj.authors
#         try:
#             a_dict["publish_date"] = a_obj.publish_date.strftime("%m/%d/%Y")
#         except Exception as e:
#             pass
#         a_dict["top_image"] = a_obj.top_image
#         a_dict["movies"] = a_obj.movies
#         a_dict["text"] = a_obj.text
#         a_dict["article_html"] = a_obj.article_html
#
#         # perform natural language processing on Article obj
#         a_obj.nlp()
#
#         # add nlp info to dict
#         a_dict["summary"] = a_obj.summary
#         a_dict["keywords"] = a_obj.keywords
#
#     # return dict list
#     return articles

# Function takes in array of Article Objects and performs download in parallel
# using multi-threading, before returning the same array
def downloadArticles(art_objs):

    # declare empty list to hold Thread objects
    download_threads = []

    # iterate through Article objects
    for art_obj in art_objs:
        try:

            # create new thread for downloading and start it
            t = threading.Thread(target=art_obj.download())
            t.start()

            # append thread to thread list
            download_threads.append(t)
        except Exception as e:
            raise

    # wait for all threads to finish
    for thrd in download_threads:
        thrd.join()

    # return downloaded Article objs
    return art_objs

# if __name__ == "main":
#     query = input("QUERY: ")
#     articles = googleNews(query, 5)
#     articles = expandNews(articles)
#     writeNewsCSV("news", articles, query, ['title', 'publisher', 'movies'])
