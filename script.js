const calculateTemp = () => {

    const numberTemp = document.getElementById('temp').value;
    //console.log(numberTemp);

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;


    const celToFah = (cel) => {
        let f = Math.round((cel*9/5) + 32);
        return f;
    }
    const fahToCal = (fah) => {
        let c = Math.round((fah - 32)*5/9);
        return c;
    }

    let result;

    if(valueTemp == 'cel'){
        result = celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}Celcius`;
    }
    else{
        result = fahToCal(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}Fahreheit`;
    }

}