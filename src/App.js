
import './App.css';
import './index.css';
import Card from "./components/card";

function App() {
  const jobs = [
  {
    brandlogo: "https://logo.clearbit.com/google.com",
    company: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$80/hr",
    location: "Pakistan"
  },
  {
    brandlogo: "https://logo.clearbit.com/apple.com",
    company: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "USA"
  },
  {
    brandlogo: "https://logo.clearbit.com/meta.com",
    company: "Meta",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$85/hr",
    location: "Remote"
  },
  {
    brandlogo: "https://logo.clearbit.com/amazon.com",
    company: "Amazon",
    datePosted: "3 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$70/hr",
    location: "India"
  },
  {
    brandlogo: "https://logo.clearbit.com/netflix.com",
    company: "Netflix",
    datePosted: "10 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$110/hr",
    location: "USA"
  },
  {
    brandlogo: "https://logo.clearbit.com/microsoft.com",
    company: "Microsoft",
    datePosted: "4 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$90/hr",
    location: "UK"
  },
  {
    brandlogo: "https://logo.clearbit.com/tesla.com",
    company: "Tesla",
    datePosted: "1 day ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$100/hr",
    location: "USA"
  },
  {
    brandlogo: "https://logo.clearbit.com/spotify.com",
    company: "Spotify",
    datePosted: "6 days ago",
    post: "Backend Engineer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$75/hr",
    location: "Sweden"
  },
  {
    brandlogo: "https://logo.clearbit.com/airbnb.com",
    company: "Airbnb",
    datePosted: "8 days ago",
    post: "UI/UX Developer",
    tag1: "Contract",
    tag2: "Junior Level",
    pay: "$65/hr",
    location: "Remote"
  },
  {
    brandlogo: "https://logo.clearbit.com/oracle.com",
    company: "Oracle",
    datePosted: "2 days ago",
    post: "Database Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Canada"
  }
];
  return (
    <div className="parent">
    {jobs.map(function(elem)
    {
      return <Card Company={elem.company} post={elem.post} brandlogo={elem.brandlogo} datePosted={elem.datePosted} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />;
    } )}
    </div>

  );
}


export default App;