
function query(num){
  let n=num;
  return {
    n:num,
    addNum: function(n1){
      n+=n1;
      return this;
    },
    subNum: function(n1){
      n-=n1;
      return this;
    },
    getNum: function(n1){
      return n;
    }
  };
};

console.log(query(10).addNum(10).addNum(10).subNum(5).getNum());
