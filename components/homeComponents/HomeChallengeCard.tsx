/**
 * Challenge Cards Component
 *
 * Cards for challenge section in home page
 * To add a linebreak for the description, simply add \n into the string value where needed in firebase
 */

function HomeChallengeCard(props) {
  var description;
  if (props.description !== undefined && props.description !== null) {
    description = props.description.replaceAll('\\n', '\n');
  }
  return (
    <div className="bg-gradient-to-b from-indigo-900 via-indigo-800 to-violet-800 w-full rounded-lg p-6 text-primaryDark">
      <div className="text-left font-bold md:text-2xl test-base p-2">{props.title}</div>
      <div className="text-left md:text-xl test-base p-2">{props.organization}</div>
      <p className="whitespace-pre-line my-3 md:text-base text-xs p-2">{description}</p>
      {props.prizes !== null && props.prizes !== undefined && (
        <div className="md:text-base text-sm p-2">
          <div className="underline font-medium md:text-base text-sm p-2">Prizes</div>
          <ul className="list-decimal list-inside md:text-base text-sm p-2">
            {props.prizes.map((prize, idx) => (
              <li key={idx}>{prize}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default HomeChallengeCard;
