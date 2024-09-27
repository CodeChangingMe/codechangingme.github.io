const year = new Date().getFullYear();
const link = "https://nextjs.org/";

export default function Footer() {
  return (
    <footer className="mt-8 py-12">
      <p className="text-center">
        Copyright &copy; {year} Lei Wu. Powered by{" "}
        <a className="font-semibold hover:italic" href={link} target="_blank">
          next.js
        </a>
        .
      </p>
    </footer>
  );
}
