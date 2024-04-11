export interface ScanTypeProps {
  /**
   * Raw JSON of the scan.
   */
  data: object;
  /**
   * Name of the scan.
   */
  name: string;
  /**
   * Click callback.
   */
  onClick: () => void;
}
export default function ScanType({ name, onClick }: ScanTypeProps) {
  return (
    <div
      className="md:p-4 p-2 cursor-pointer m-3 min-w-28 rounded-lg text-white bg-indigo-800 hover:brightness-90 px-4 py-2 h-min"
      onClick={onClick}
    >
      <div className="text-center md:text-lg font-bold">{name}</div>
    </div>
  );
}
