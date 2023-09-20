import './Footer.css';

const dataFooter = [
  {
    col_number: 1,
    col_values: [
      'Countries',
      'Regions',
      'Cities',
      'Districts',
      'Airports',
      'Hotels',
    ],
  },
  {
    col_number: 2,
    col_values: [
      'Homes',
      'Apartments',
      'Resorts',
      'Villas',
      'Hostels',
      'Guest houses',
    ],
  },
  {
    col_number: 3,
    col_values: [
      'Unique places to stay',
      'Reviews',
      'Unpacked: Travel articles',
      'Travel communities',
      'Seasonal and holiday deals',
    ],
  },
  {
    col_number: 4,
    col_values: [
      'Car rental',
      'Flight Finder',
      'Restaurant reservations',
      'Travel Agents',
    ],
  },
  {
    col_number: 5,
    col_values: [
      'Curtomer Service',
      'Partner Help',
      'Careers',
      'Sustainability',
      'Press center',
      'Safety Resource Center',
      'Investor relations',
      'Terms & conditions',
    ],
  },
];

const Footer = () => {
  const footer = dataFooter.map((item, index) => (
    <ul key={index} className="link__lists">
      {item.col_values.map((item, index) => (
        <li className="navigaList" key={index}>
          <a href="/" className="link">
            {item}
          </a>
        </li>
      ))}
    </ul>
  ));
  return (
    <div className="navigation__link">
      <div className="navigationWrapper"> {footer}</div>
    </div>
  );
};
export default Footer;