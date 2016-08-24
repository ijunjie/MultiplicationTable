puts (1..9).map{|i|(1..i).map{|c|"#{c}x#{i}=#{c*i}"}.join "\t"}.join "\r\n"
