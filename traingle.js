function dekripsi() {
    let str = document.querySelector('.triangle').value;
    var baris, i, j, k, l, m;
    if (str.length > 25) {
        alert('Input terlalu banyak')
    } else {
        if (str.length < 2) {
            // menampilkan huruf
            for (i = 0; i < str.length; i++) {
                document.write(str[i]);
            }
        } else if (str.length >= 2 && str.length < 5) {
            baris = 2;
            for (j = baris - 1; j > 0; j--) {
                document.write('-'); // Karakter spasi
            }
            // menampilkan huruf
            for (i = 0; i < 4; i++) {
                if (i < 1) {
                    document.write(str[i]);
                    document.write("</br>");
                } else {
                    if (i < str.length) {
                        document.write(str[i]);
                    } else {
                        if (str[i] == undefined) {
                            document.write('x')
                        }
                    }
                }
            }
        } else if (str.length >= 5 && str.length < 10) {
            baris = 3;
            i = 0;
            for (j = 3; j > 1; j--) {
                for (k = baris - 1; k > 0; k--) {
                    document.write('-');
                }
                for (i; i < 9; i++) {
                    if (i < 1) {
                        document.write(str[i]);
                        document.write("</br>");
                        break;
                    } else if (i < 4) {
                        if (i == 3) {
                            document.write(str[i]);
                            document.write("</br>");
                        } else {
                            document.write(str[i]);
                        }
                    } else {
                        if (i < str.length) {
                            document.write(str[i]);
                        } else {
                            if (str[i] == undefined) {
                                document.write('x')
                            }
                        }
                    }
                }
                baris--;
                i++;
            }
            // menampilkan huruf
        } else if (str.length >= 10 && str.length < 17) {
            baris = 4;
            i = 0;
            for (j = 4; j > 1; j--) {
                for (k = baris; k > 1; k--) {
                    document.write('-');
                }
                // menampilkan huruf
                for (i; i < 16; i++) {
                    if (i < 1) {
                        document.write(str[i]);
                        document.write("</br>");
                        break;
                    } else if (i >= 1 && i < 4) {
                        if (i == 3) {
                            document.write(str[i]);
                            document.write("</br>");
                            break;
                        } else {
                            document.write(str[i]);
                        }
                    } else if (i >= 4 && i < 9) {
                        if (i == 8) {
                            document.write(str[i]);
                            document.write("</br>");
                        } else {
                            document.write(str[i]);
                        }
                    } else {
                        if (i < str.length) {
                            document.write(str[i]);
                        } else {
                            if (str[i] == undefined) {
                                document.write('x')
                            }
                        }
                    }
                }
                baris--;
                i++;
            }
        } else if (str.length >= 17 && str.length < 26) {
            baris = 5;
            i = 0;
            for (j = 5; j > 1; j--) {
                for (k = baris; k > 1; k--) {
                    document.write('-');
                }
                // menampilkan huruf
                for (i; i <= 25; i++) {
                    if (i < 1) {
                        document.write(str[i]);
                        document.write("</br>");
                        break;
                    } else if (i >= 1 && i < 4) {
                        if (i == 3) {
                            document.write(str[i]);
                            document.write("</br>");
                            break;
                        } else {
                            document.write(str[i]);
                        }
                    } else if (i >= 4 && i < 9) {
                        if (i == 8) {
                            document.write(str[i]);
                            document.write("</br>");
                            break;
                        } else {
                            document.write(str[i]);
                        }
                    } else if (i >= 9 && i < 16) {
                        if (i == 15) {
                            document.write(str[i]);
                            document.write("</br>");
                        } else {
                            document.write(str[i]);
                        }
                    } else {
                        if (i < str.length) {
                            document.write(str[i]);
                        } else {
                            if (str[i] == undefined) {
                                document.write('x')
                            }
                        }
                    }
                }
                baris--;
                i++;
            }
        }
    }
}