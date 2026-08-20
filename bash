for file in *.{jpg,jpeg,png}; do
  # Melewati file jika tidak ada
  [ -e "$file" ] || continue

  # Proses kompresi
  echo "Mengompres: $file"
  cwebp -q 80 "$file" -o "${file%.*}.webp"
done
