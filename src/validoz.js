/*
Author: Kamyar Lajani
Email: kamolajani1@gmail.com
*/

function isEmailValid(email) {
    let mailformat = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if(email.match(mailformat)){
        return true;
    }
    return false;
}
function isValidDate(dateString, dateFormat, startDate, endDate) {
    let datePattern;
    let year, month, day;
    if(dateFormat === 'yyyy-mm-dd') {
        datePattern = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
         // Remove any non digit characters
        const cleanDateString = dateString.replace(/\D/g, ''); 
        // Parse integer values from date string
        year = parseInt(cleanDateString.substr(0, 4));
        month = parseInt(cleanDateString.substr(4, 2));
        day = parseInt(cleanDateString.substr(6, 2));
    }
    else if(dateFormat === 'yyyy/mm/dd') {
        datePattern = /^([12]\d{3}\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01]))/;
        const cleanDateString = dateString.replace(/\D/g, ''); 
        year = parseInt(cleanDateString.substr(0, 4));
        month = parseInt(cleanDateString.substr(4, 2));
        day = parseInt(cleanDateString.substr(6, 2));
    }
    else if(dateFormat === 'dd-mm-yyyy') {
        datePattern = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[012])-(19|20)\d\d$/;
        const cleanDateString = dateString.replace(/\D/g, ''); 
        year = parseInt(cleanDateString.substr(4, 4));
        month = parseInt(cleanDateString.substr(2, 2));
        day = parseInt(cleanDateString.substr(0, 2));
    }
    else if(dateFormat === 'dd/mm/yyyy') {
        datePattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d$/;
        const cleanDateString = dateString.replace(/\D/g, ''); 
        year = parseInt(cleanDateString.substr(4, 4));
        month = parseInt(cleanDateString.substr(2, 2));
        day = parseInt(cleanDateString.substr(0, 2));
    }
    else if(dateFormat === 'mm-dd-yyyy') {
        datePattern = /^(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])-(19|20)\d\d$/;
        const cleanDateString = dateString.replace(/\D/g, ''); 
        year = parseInt(cleanDateString.substr(4, 4));
        month = parseInt(cleanDateString.substr(0, 2));
        day = parseInt(cleanDateString.substr(2, 2));
    }
    else if(dateFormat === 'mm/dd/yyyy') {
        datePattern = /^(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d\d$/;
        const cleanDateString = dateString.replace(/\D/g, ''); 
        year = parseInt(cleanDateString.substr(4, 4));
        month = parseInt(cleanDateString.substr(0, 2));
        day = parseInt(cleanDateString.substr(2, 2));
    }
    else if(dateFormat === 'mm/dd/yyyy') {
        datePattern = /^(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d\d$/;
        const cleanDateString = dateString.replace(/\D/g, ''); 
        year = parseInt(cleanDateString.substr(4, 4));
        month = parseInt(cleanDateString.substr(0, 2));
        day = parseInt(cleanDateString.substr(2, 2));
    }
    // date ranges
    if(startDate !== undefined){
        if(dateFormat === 'mm/dd/yyyy' || dateFormat === 'mm-dd-yyyy') {
            const cleanDateString = startDate.replace(/\D/g, ''); 
            startYear = parseInt(cleanDateString.substr(4, 4));
            startMonth = parseInt(cleanDateString.substr(0, 2));
            startDay = parseInt(cleanDateString.substr(2, 2));
        }
        else if(dateFormat === 'dd/mm/yyyy' || dateFormat === 'dd-mm-yyyy') {
            const cleanDateString = startDate.replace(/\D/g, ''); 
            startYear = parseInt(cleanDateString.substr(4, 4));
            startMonth = parseInt(cleanDateString.substr(2, 2));
            startDay = parseInt(cleanDateString.substr(0, 2));
        }
        else if(dateFormat === 'yyyy-mm-dd' || dateFormat === 'yyyy/mm/dd') {
            const cleanDateString = startDate.replace(/\D/g, ''); 
            startYear = parseInt(cleanDateString.substr(0, 4));
            startMonth = parseInt(cleanDateString.substr(4, 2));
            startDay = parseInt(cleanDateString.substr(6, 2));
        }
        if(startYear > year) {
            return false;
        }
        else {;
            if(startMonth > month) {
                return false;
            }
            else {
                if(startDay > day) {
                    return false;
                }
            }
        }
    }
    if(endDate !== undefined){
        if(dateFormat === 'mm/dd/yyyy' || dateFormat === 'mm-dd-yyyy') {
            const cleanDateString = endDate.replace(/\D/g, ''); 
            endYear = parseInt(cleanDateString.substr(4, 4));
            endMonth = parseInt(cleanDateString.substr(0, 2));
            endDay = parseInt(cleanDateString.substr(2, 2));
        }
        else if(dateFormat === 'dd/mm/yyyy' || dateFormat === 'dd-mm-yyyy') {
            const cleanDateString = endDate.replace(/\D/g, ''); 
            endYear = parseInt(cleanDateString.substr(4, 4));
            endMonth = parseInt(cleanDateString.substr(2, 2));
            endDay = parseInt(cleanDateString.substr(0, 2));
        }
        else if(dateFormat === 'yyyy-mm-dd' || dateFormat === 'yyyy/mm/dd') {
            const cleanDateString = endDate.replace(/\D/g, ''); 
            endYear = parseInt(cleanDateString.substr(0, 4));
            endMonth = parseInt(cleanDateString.substr(4, 2));
            endDay = parseInt(cleanDateString.substr(6, 2));
        }
        if(endYear < year) {
            return false;
        }
        else {
            if(endMonth < month) {
                return false;
            }
            else {
                if(endDay < day) {
                    return false;
                }
            }
        }
    }
    let matchArray = dateString.match(datePattern);
    if (matchArray == null) {
        return false;
    }
    // Define number of days per month
    let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // Adjust for leap years
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
        daysInMonth[1] = 29;
    }
    // check month and day range
    if (month < 1 || month > 12 || day < 1 || day > daysInMonth[month - 1]) {
        return false;
    }
    return true;
}
function isValidTime(time){
    const timeFormat = /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/;
    if(time.match(timeFormat)){
        return true;
    }
    return false;
}
export let validoz = (fields)=>{
    let errors = [];
    // is fields multiple?
    if(Array.isArray(fields)){
        for(let field of fields) {
            errors.push(validate(field));
        }
        return errors;
    }
    else if(typeof fields === 'object' && fields !== null){
        return validate(fields);
    }
}
const validate = (field)=>{
    let error = [];
    if(!field.name || field.name === ''){
        throw new Error(`Property name not passed`);
    }
    if(!field.type || field.type === ''){
        throw new Error(`Property ${field.name} type not passed`);
    }
    else if(field.value === undefined){
        throw new Error(`Property value not passed`);
    }
    else if(field.value === '' && (field.required === undefined || field.required === true)){
        error.push(`${field.name} is required`);
    }
    // minLength & maxLength
    if(field.minLength && !field.maxLength){
        if(!Number.isInteger(field.minLength)){
            throw new Error(`minLength is not an integer`);
        }
        else if(field.minLength < 1){
            throw new Error(`minLength value must be at least 1`);
        }
        else if(field.value.length < field.minLength){
            error.push(`${field.name} length must be at least ${field.minLength} characters`);
        }
    }
    else if(!field.minLength && field.maxLength){
        if(!Number.isInteger(field.maxLength)){
            throw new Error(`maxLength is not an integer`);
        }
        else if(field.value.length > field.maxLength){
            error.push(`${field.name} length must be less than ${field.maxLength} characters`);
        }
    }
    else if(field.minLength && field.maxLength) {
        if(!Number.isInteger(field.maxLength) || !Number.isInteger(field.minLength)){
            throw new Error(`minLength and maxLength must be an integer`);
        }
        else if(field.value.length < field.minLength || field.value.length > field.maxLength){
            error.push(`${field.name} length must be between ${field.minLength} and ${field.maxLength}`);
        }
    }
    if(field.type === 'number'){
        const value = parseInt(field.value);
        if(!Number.isInteger(value) && field.value != ''){
            error.push('value must be a number');
        }
        else {
            // min & max
            if(field.min && !field.max){
                if(!Number.isInteger(field.min)){
                    throw new Error(`min is not an integer`);
                }
                else if(value < field.min){
                    error.push(`${field.name} must be at least ${field.min}`);
                }
            }
            if(!field.min && field.max){
                if(!Number.isInteger(field.max)){
                    throw new Error(`max is not an integer`);
                }
                else if(value > field.max){
                    error.push(`${field.name} must be less than ${field.max}`);
                }
            }
            else if(field.min && field.max){
                if(!Number.isInteger(field.max) || !Number.isInteger(field.min)){
                    throw new Error(`min and max must be an integer`);
                }
                else if(value < field.min || value > field.max){
                    error.push(`${field.name} must be between ${field.min} and ${field.max}`);
                }
            }
            // minDigits & maxDigits
            if(field.minDigits && !field.maxDigits){
                if(!Number.isInteger(field.minDigits)){
                    throw new Error(`minDigits is not an integer`);
                }
                else if(value.toString().length < field.minDigits){
                    error.push(`${field.name} must be at least ${field.minDigits} digits`);
                }
            }
            else if(!field.minDigits && field.maxDigits){
                if(!Number.isInteger(field.maxDigits)){
                    throw new Error(`maxDigits is not an integer`);
                }
                else if(value.toString().length > field.maxDigits){
                    error.push(`${field.name} must be less than ${field.maxDigits} digits`);
                }
            }
            else if(field.minDigits && field.maxDigits){
                if(!Number.isInteger(field.maxDigits) || !Number.isInteger(field.minDigits)){
                    throw new Error(`minDigits and maxDigits must be an integer`);
                }
                else if(value.toString().length < field.minDigits || value.toString().length > field.maxDigits){
                    error.push(`${field.name} must be between ${field.minDigits} and ${field.maxDigits} digits`);
                }
            }
        }
    }
    if(field.type === 'email'){
        if(!isEmailValid(field.value)){
            error.push(`Email address is invalid`);
        }
    }
    if(field.type === 'date'){
        if(!isValidDate(field.value, field.dateFormat, field.startDate, field.endDate)){
            error.push(`${field.name} is invalid`);
        }
    }
    if(field.type === 'time'){
        if(!isValidTime(field.value)){
            error.push(`${field.name} is invalid`);
        }
    }
    if(field.type === 'username'){
        const usernameFormat = /^[a-zA-Z0-9_]{5,}[a-zA-Z]+[0-9]*$/;
        if(!field.value.match(usernameFormat)){
            error.push(`${field.name} is invalid`);
        }
    }
    if(field.type === 'fullname'){
        const fullnameFormat = /^([\w]{3,})+\s+([\w\s]{3,})+$/i;
        if(!field.value.match(fullnameFormat)){
            error.push(`${field.name} is invalid`);
        }
    }
    if(field.type === 'word'){
        const alphabetFormat = /^[A-Za-z]+$/;
        if(!field.value.match(alphabetFormat)){
            error.push(`${field.name} is invalid`);
        }
    }
    if(field.type === 'password'){
        const passwordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;
        if(!field.value.match(passwordFormat)){
            error.push(`${field.name} must contain at least one numberic, one upper case and one lower case characters and the length at least 6 characters`);
        }
    }
    if(field.equal !== undefined){
        if(field.value !== field.equal){
            error.push(`${field.name} is wrong`);
        }
    }
    if(field.notEqual !== undefined){
        if(field.value === field.notEqual){
            error.push(`${field.name} is wrong`);
        }
    }
    if(error[0] === undefined){
        return {field: field.name, message: ''};
    }
    return {field: field.name, message: error[0]};
}

export let isValid = (fields) => {
    // is fields multiple?
    let isValid = true;
    if(Array.isArray(fields)){
        for(let field of fields) {
            if(field.message !== ''){
                isValid = false;
            }
        }
    }
    else if(typeof fields === 'object' && fields !== null){
        if(fields.message !== ''){
            isValid = false;
        }
    }
    return isValid;
}
export let isValidByName = (fields, name) => {
    // is fields multiple?
    let isValid = true;
    if(Array.isArray(fields)){
        for(let field of fields) {
            if(field.message !== '' && field.field === name){
                isValid = false;
            }
        }
    }
    else if(typeof fields === 'object' && fields !== null){
        if(fields.message !== '' && fields.field === name){
            isValid = false;
        }
    }
    return isValid;
}
