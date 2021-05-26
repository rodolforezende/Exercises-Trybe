function citiesDDD (n){  
  switch (n) {
    case 61:
      return `DDD: ${n}, cidade = Brasili`;
      break;
    case 71:
      return `DDD: ${n}, cidade = Salvador`;
      break;
    case 11:
        return `DDD: ${n}, cidade = Sao Paulo`;
        break;
    case 21:
        return `DDD: ${n}, cidade = Rio de Janeiro`;
        break;
    case 32:
      return `DDD: ${n}, cidade = Juiz de Fora`;
      break;
     case 19:
      return `DDD: ${n}, cidade = Campinas`;
      break;
     case 27:
      return `DDD: ${n}, cidade = Vitoria`;
      break;
     case 31:
      return `DDD: ${n}, cidade = Belo Horizonte`;
      break;
    default:
      return `DDD inválido`
      break;
  }
}

console.log(citiesDDD(27));