<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mini projeto</title>
    <link rel="stylesheet" href="cores.css" />
  </head>
  <body>
    <img src="https://media.tenor.com/sboZxklZ2pcAAAAC/8bit-space.gif" alt=" artist rendition of a black hole in space">

    <div class="center">
      <h1>Formulário:</h1>
      <h3>Insira abaixo seu nome e data de nascimento</h3>
      <label for="fname">Nome</label><br />
      <input id="name_input" type="text" /><br />
      <label for="fname">Data Nascimento</label><br />
      <select id="month" autocomplete="off" aria-label="Month">
        <option>January</option>
        <option>February</option>
        <option>March</option>
        <option>April</option>
        <option>May</option>
        <option>June</option>
        <option selected="">July</option>
        <option>August</option>
        <option>September</option>
        <option>October</option>
        <option>November</option>
        <option>December</option>
        </select>
        <select id="day" autocomplete="off" aria-label="Day">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option selected="">11</option>
          <option>12</option>
          <option>13</option>
          <option>14</option>
          <option>15</option>
          <option>16</option>
          <option>17</option>
          <option>18</option>
          <option>19</option>
          <option>20</option>
          <option>21</option>
          <option>22</option>
          <option>23</option>
          <option>24</option>
          <option>25</option>
          <option>26</option>
          <option>27</option>
          <option>28</option>
          <option>29</option>
          <option>30</option>
          <option>31</option>
          </select>
          <select id="year" autocomplete="off" aria-label="Year">
            <option>2024</option>
            <option selected="">2023</option>
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
            <option>2019</option>
            <option>2018</option>
            <option>2017</option>
            <option>2016</option>
            <option>2015</option>
            <option>2014</option>
            <option>2013</option>
            <option>2012</option>
            <option>2011</option>
            <option>2010</option><option>2009</option><option>2008</option><option>2007</option><option>2006</option><option>2005</option><option>2004</option><option>2003</option><option>2002</option><option>2001</option><option>2000</option><option>1999</option><option>1998</option><option>1997</option><option>1996</option><option>1995</option><option>1994</option><option>1993</option><option>1992</option><option>1991</option><option>1990</option><option>1989</option><option>1988</option><option>1987</option><option>1986</option><option>1985</option><option>1984</option><option>1983</option><option>1982</option><option>1981</option><option>1980</option><option>1979</option><option>1978</option><option>1977</option><option>1976</option><option>1975</option><option>1974</option><option>1973</option><option>1972</option><option>1971</option><option>1970</option><option>1969</option><option>1968</option><option>1967</option><option>1966</option><option>1965</option><option>1964</option><option>1963</option><option>1962</option><option>1961</option><option>1960</option><option>1959</option><option>1958</option><option>1957</option><option>1956</option><option>1955</option><option>1954</option><option>1953</option><option>1952</option><option>1951</option><option>1950</option><option>1949</option><option>1948</option><option>1947</option><option>1946</option><option>1945</option><option>1944</option><option>1943</option><option>1942</option><option>1941</option><option>1940</option><option>1939</option><option>1938</option><option>1937</option><option>1936</option><option>1935</option><option>1934</option><option>1933</option><option>1932</option><option>1931</option><option>1930</option><option>1929</option><option>1928</option><option>1927</option><option>1926</option><option>1925</option><option>1924</option><option>1923</option><option>1922</option><option>1921</option><option>1920</option><option>1919</option><option>1918</option><option>1917</option><option>1916</option><option>1915</option><option>1914</option><option>1913</option><option>1912</option><option>1911</option><option>1910</option><option>1909</option><option>1908</option><option>1907</option><option>1906</option><option>1905</option><option>1904</option><option>1903</option><option>1902</option>
            </select>
      <button onclick="enviar(),separar()">Enviar</button><br />
      <table id="tabela" border="2">
        <tr>
          <h4>Dados</h4>
          <th>Nome</th>
          <th>Ano</th>
          <th>Mês</th>
          <th>Dia</th>
          <th>Signo</th>
        </tr>

        <tr id="emptyRow">
          <td colspan="5" id="Nome">Não há dados</td>
        </tr>
      </table>
    </div>
    <footer> <h1>Want the ctf code?</h1></footer>
    <script>
     let signos = [{min: "21/01", max:"18/02"},  //aquario
     {min:"19/02",max:"20/03"}, // peixe
     {min:"21/03",max: "20/04"}, // aries
     {min:"21/04", max: "20/05"}, // touro
     {min:"21/05",max:"20/06"}, //  gemeos
     {min:"21/06",max:"22/07"}, // cancer
     {min:"23/07",max:"22/08"}, // leao
     {min:"23/08",max:"22/09"}, // virgem
     {min:"23/09",max:"22/10"}, // libra
     {min:"23/10",max:"21/11"}, // escorpiao
     {min:"22/11",max:"21/12"}, // sagitario    
    ]

    let meses = ["January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"];
    //console.log(meses);
      function separar(){
        let tamanho = signos.length;
        let birthdayInputValue = document.getElementById("month").value;
        let day = document.getElementById("day").value;
        let result;
        /*for(var c=0;c<tamanho;c++){
          let mesEntrada = 9;
          let diaEntrada = 16;
          let min = signos[c].min.split("/");
          let minDia = min[0];  
          let minMes = min[1];
          let max = signos[c].max.split('/'); 
          let maxDia = max[0];
          let maxMes = max[1];
          //console.log(minDia)
          //console.log(minMes)
          //console.log(maxDia)
          //console.log(maxMes)
          if(minMes <= mesEntrada && mesEntrada <= maxMes){
            console.log("primeiro if");
            if(diaEntrada >= minDia && diaEntrada >= maxDia){
              if(birthdayInputValue == "September"){
                signo = "Virgem?";
                console.log(signo)
              }
          }
        }
      } */
      if(
        (day>=21 && birthdayInputValue == "January") ||
        (day <=18 && birthdayInputValue == "February")) {
        result = "Aquario"
        }
        
      if(
      (day>=19 && birthdayInputValue == "February") ||
      (day <=20 && birthdayInputValue == "March")) {
      result = "Peixe"
      } 

      if(
      (day>=21 && birthdayInputValue == "March") ||
      (day <=20 && birthdayInputValue == "April")) {
      result = "Aries"
      }

      if(
      (day>=21 && birthdayInputValue == "April") ||
      (day <=20 && birthdayInputValue == "May")) {
      result = "A"
      }    
 
      if(
      (day>=21 && birthdayInputValue == "May") ||
      (day <=20 && birthdayInputValue == "June")) {
      result = "Touro"
      }

      if(
      (day>=21 && birthdayInputValue == "June") ||
      (day <=20 && birthdayInputValue == "July")) {
      result = "Gemeos"
      }
      
      if(
      (day>=21 && birthdayInputValue == "July") ||
      (day <=22 && birthdayInputValue == "August")) {
      result = "Cancer"
      }
      
      if(
      (day>=23 && birthdayInputValue == "August") ||
      (day <=22 && birthdayInputValue == "September")) {
      result = "Leao"
      }
      
      if(
      (day>=19 && birthdayInputValue == "September") ||
      (day <=20 && birthdayInputValue == "October")) {
      result = "Virgem"
      }

      if(
      (day>=23 && birthdayInputValue == "October") ||
      (day <=21 && birthdayInputValue == "November")) {
      result = "Libra"
      }
      
      if(
      (day>=22 && birthdayInputValue == "November") ||
      (day <=21 && birthdayInputValue == "December")) {
      result = "Sagitario"
      }
      
      if(
      (day>=22 && birthdayInputValue == "December") ||
      (day <=19 && birthdayInputValue == "January")) {
      result = "Capricornio"
      }  
    }  
      var data = [];
      let signo;
      function enviar() {
        let nameInputValue = document.getElementById("name_input").value;
        let year = document.getElementById("year").value;
        let birthdayInputValue = document.getElementById("month").value;
        let day = document.getElementById("day").value;

        if (Number(nameInputValue) || !nameInputValue || !birthdayInputValue) {
          window.alert("Caixa de texto não aceita números!.");
        } else {
          if (data.length == 0) {
            document.getElementById("tabela").deleteRow(-1);
          }

          let table = document.getElementById("tabela");
          let newRow = table.insertRow(-1);
          let newNameCell = newRow.insertCell(0);
          let newDay = newRow.insertCell(1)
          let newBirthdayCell = newRow.insertCell(1);
          let newYear = newRow.insertCell(1)
          let signo1 = newRow.insertCell(-1)

          newNameCell.innerHTML = nameInputValue;
          newBirthdayCell.innerHTML = birthdayInputValue;
          signo1.innerHTML = signo;
          newDay.innerHTML = day;
          newYear.innerHTML = year;

          data.push({ "name": nameInputValue, "birthday": birthdayInputValue, "signo": signo,"Ano": year,"dia":day });
          console.log(data)
        }
      }
    </script>
  </body>
</html>