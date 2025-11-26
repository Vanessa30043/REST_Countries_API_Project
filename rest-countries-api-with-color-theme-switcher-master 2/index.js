
        let container = document.getElementById('container')
        let container_2 = document.getElementById('container_2')
        let extraInfobutoon = document.getElementById('extraInforButton')
        let searchButton = document.getElementById('searchButton')
        //DEFAULT INFO
        let country_name = document.getElementBy('countryName')
        let officialName = document.getElementById('officalName')
        let population = document.getElementById('population')
        let continent = document.getElementById('continent')
        let currency = document.getElementById('currency')
        let flag = document.getElementById('flag')
        //EXTRA INFO, IF USER REQUESTS FOR MORE
        let car = document.getElementById('car')
        let subregion = document.getElementById('subregion')
        let startOfWeek = document.getElementById('startOfWeek')
        let language = document.getElementById('language')
        let info_list = document.getElementById('info')
        let country_input = document.getElementById('countryInput')

        let storeCountryName = ''

        function fetchData(){
            let countryName= country_input.value

            if (countryName == "") {
                alert('Enter a country name ....')
            }
            else{
                fetch(`https://restcountries.com/v3.1/name/deutschland${countryName}`)
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })
                    
            }

        }
        searchButton.addEventListener('click',fetchData)
        //will run the fetchData() function when user clicks the search Button


    