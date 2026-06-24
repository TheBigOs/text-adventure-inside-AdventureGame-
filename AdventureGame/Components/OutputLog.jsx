export default function OutputLog({ output }) {
  return (
    <div>
      {output.map((line, index) => (
        <div key={index}>{line}</div>
      ))}
    </div>
  );
}
