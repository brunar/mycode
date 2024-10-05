const PageCalculator = () => {

  const operations = {
    "+": (left: number, right: number): number => left + right,
    "-": (left: number, right: number): number => left - right,
    "*": (left: number, right: number): number => left * right,
    "/": (left: number, right: number): number => left / right,
  };

//   type CalculatorProps = {
//     left: number;
//     operator: '+' | '-' | '*' | '/';
//     right: number;
//   };

  function Calculator({
    left,
    operator,
    right,
  }: {
    left: number;
    operator: "+" | "-" | "*" | "/";
    right: number;
  }) {
    const result = operations[operator](left, right);
    return (
      <div>
        <code>
          {left} {operator} {right} = <output>{result}</output>
        </code>
      </div>
    );
  }

  return (
    <div>
      <h1>Calculator</h1>
      <Calculator left={1} operator="+" right={2} />
      <Calculator left={1} operator="-" right={2} />
      <Calculator left={1} operator="*" right={2} />
      <Calculator left={1} operator="/" right={2} />
    </div>
  );
};

export default PageCalculator;
