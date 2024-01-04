export default function guardrail(mathFunction) {
  let queue = [];
  let result;
  try {
    result = mathFunction();
  } catch (err) {
    result = `${err.name}: ${err.message}`;
  }

  queue = [result, 'Guardrail was processed'];

  return queue;
}
