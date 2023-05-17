import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
   <section className="section">
      <div className="section__container">
         <h2 className="section__header2">{title}</h2>
         {extraHeaderContent}
      </div>
      {body}
   </section>
);

export default Section;