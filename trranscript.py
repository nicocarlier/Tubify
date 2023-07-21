# print('What is your name?')


from youtube_transcript_api import YouTubeTranscriptApi

# def my_function(youtubeId):

outls = []

tx = YouTubeTranscriptApi.get_transcript('qG-bTHTuZxU', languages=['en'])

for i in tx:
    outtxt = (i['text'])
    outls.append(outtxt)

    with open("op.txt", "a") as opf:
        opf.write(outtxt + "\n")