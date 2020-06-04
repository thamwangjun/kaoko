  
from igramscraper.instagram import Instagram
import sys

instagram = Instagram()
proxies = {
    'http': 'http://123.45.67.8:1087',
    'https': 'http://123.45.67.8:1087',
}
instagram.set_proxies(proxies)

media = instagram.get_media_by_url(sys.argv[1])

print(media)