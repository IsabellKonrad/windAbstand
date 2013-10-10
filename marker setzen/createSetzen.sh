python translate_polygon.py ../Landkreise/aschaffenburg-raw.txt
python translate_polygon.py ../Landkreise/bad-kissingen-raw.txt
python translate_polygon.py ../Landkreise/hassberge-raw.txt
python translate_polygon.py ../Landkreise/kitzingen-raw.txt
python translate_polygon.py ../Landkreise/main-spessart-raw.txt
python translate_polygon.py ../Landkreise/miltenberg-raw.txt
python translate_polygon.py ../Landkreise/rhoen-grabfeld-raw.txt
python translate_polygon.py ../Landkreise/schweinfurt-land-raw.txt
python translate_polygon.py ../Landkreise/wue-land-raw.txt
python einMarker.py ../Ortschaften/Aschaffenburg.txt
python einMarker.py ../Ortschaften/BadKissingen.txt
python einMarker.py ../Ortschaften/Hassberge.txt
python einMarker.py ../Ortschaften/Kitzingen.txt
python einMarker.py ../Ortschaften/MainSpessart.txt
python einMarker.py ../Ortschaften/Miltenberg.txt
python einMarker.py ../Ortschaften/RhoenGrabfeld.txt
python einMarker.py ../Ortschaften/Schweinfurt.txt
python einMarker.py ../Ortschaften/Wuerzburg.txt
cat pre.html > setzen.html
cat ../Landkreise/aschaffenburg.txt >> setzen.html
cat ../Landkreise/bad-kissingen.txt >> setzen.html
cat ../Landkreise/hassberge.txt >> setzen.html
cat ../Landkreise/kitzingen.txt >> setzen.html
cat ../Landkreise/main-spessart.txt >> setzen.html
cat ../Landkreise/miltenberg.txt >> setzen.html
cat ../Landkreise/rhoen-grabfeld.txt >> setzen.html
cat ../Landkreise/schweinfurt-land.txt >> setzen.html
cat ../Landkreise/wue-land.txt >> setzen.html
cat Aschaffenburg-ein.txt >> setzen.html
cat BadKissingen-ein.txt >> setzen.html
cat Hassberge-ein.txt >> setzen.html
cat Kitzingen-ein.txt >> setzen.html
cat MainSpessart-ein.txt >> setzen.html
cat Miltenberg-ein.txt >> setzen.html
cat RhoenGrabfeld-ein.txt >> setzen.html
cat Schweinfurt-ein.txt >> setzen.html
cat Wuerzburg-ein.txt >> setzen.html
cat post.html >> setzen.html
rm *.txt
