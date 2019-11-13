cd pages/staging
ls > temp.txt
while read -r line
do
    cat $line | sed "s/'slide'/'view'/g" > ../$line
done < temp.txt
rm temp.txt
