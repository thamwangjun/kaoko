  
from igramscraper.instagram import Instagram
import sys
import json

instagram = Instagram()
media = instagram.get_media_by_url(sys.argv[1])

if media.video_standard_resolution_url:
    print(media.video_standard_resolution_url)
elif media.image_standard_resolution_url:
    print(media.image_standard_resolution_url)
