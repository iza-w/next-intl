type Props = {
  code?: string;
  description: string;
  title: string;
};

export default function FeaturePanel({code, description, title}: Props) {
  return (
    <div className="flex flex-col overflow-hidden border-slate-200">
      {code && (
        <div className="grow rounded-sm bg-white dark:bg-slate-800">
          <pre className="-ml-4 overflow-x-auto !p-4 md:!p-6">{code}</pre>
        </div>
      )}
      <div className="p-4 md:p-6">
        <h2 className="font-semibold text-slate-900 dark:text-white">
          {title}
        </h2>
        <p className="mt-2 max-w-md text-slate-600 dark:text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
}
