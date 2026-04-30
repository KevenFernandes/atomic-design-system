import { Button } from "../components/Button";
import { InputText } from "../components/InputText";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white  sm:items-start">
        <div className="mx-auto">
          <div className="flex gap-4">
            <Button variant="primary" size="xl">
              Button
            </Button>
            <Button variant="outline" size="xl">
              Button
            </Button>
            <Button variant="ghost" size="xl">
              Button
            </Button>
          </div>

          <div className="flex gap-8 flex-col my-6">
            <InputText
              intent="default"
              mode="outline"
              inputSize="larger"
              labelText="Label Text"
              helperText="Helper Text"
              placeholder="Placeholder"
            />

            <InputText
              intent="default"
              mode="solid"
              inputSize="larger"
              labelText="Label Text"
              helperText="Helper Text"
              placeholder="Placeholder"
            />

            <InputText
              intent="success"
              mode="outline"
              inputSize="larger"
              labelText="Label Text"
              helperText="Helper Text"
              placeholder="Placeholder"
            />
            <InputText
              intent="success"
              mode="solid"
              inputSize="larger"
              labelText="Label Text Disabled"
              helperText="Helper Text"
              placeholder="Placeholder"
              disabled
            />

            <InputText
              intent="error"
              mode="outline"
              inputSize="medium"
              labelText="Label Text"
              helperText="Helper Text"
              placeholder="Placeholder"
            />
            <InputText
              intent="error"
              mode="solid"
              inputSize="medium"
              labelText="Label Text"
              helperText="Helper Text"
              placeholder="Placeholder"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
