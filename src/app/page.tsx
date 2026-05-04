import { StarIcon } from "lucide-react";
import { Alert } from "../components/Alert";
import { Badge } from "../components/Badge";
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
          <h2 className="my-4">Badge e Chip</h2>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <Badge
                varirant="default"
                mode="solid"
                size="medium"
                buttonText="Badge"
              />
              <Badge varirant="default" mode="solid" size="medium" />

              <Badge
                varirant="default"
                mode="outline"
                size="medium"
                buttonText="Badge"
              />
              <Badge varirant="default" mode="outline" size="medium" />
            </div>

            <div className="flex gap-2">
              <Badge
                varirant="success"
                mode="solid"
                size="small"
                buttonText="Badge"
              />
              <Badge varirant="success" mode="solid" size="small" />

              <Badge
                varirant="success"
                mode="outline"
                size="small"
                buttonText="Badge"
              />
              <Badge varirant="success" mode="outline" size="small" />
            </div>

            <div className="flex gap-2">
              <Badge
                varirant="info"
                mode="solid"
                size="tiny"
                buttonText="Badge"
              />
              <Badge varirant="info" mode="solid" size="tiny" />

              <Badge
                varirant="info"
                mode="outline"
                size="tiny"
                buttonText="Badge"
              />
              <Badge varirant="info" mode="outline" size="tiny" />
            </div>

            <div className="flex gap-2">
              <Badge
                varirant="warning"
                mode="solid"
                size="tiny"
                buttonText="Badge"
              />
              <Badge varirant="warning" mode="solid" size="tiny" />

              <Badge
                varirant="warning"
                mode="outline"
                size="tiny"
                buttonText="Badge"
              />
              <Badge varirant="warning" mode="outline" size="tiny" />
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4">
            <Alert
              variant="default"
              title="Title"
              description="Get immediate alerts and a notification badge."
              icon={StarIcon}
            />

            <Alert
              variant="default"
              mode="outline"
              title="Title"
              description="Get immediate alerts and a notification badge."
              icon={StarIcon}
            />

            {/* success */}

            <Alert
              variant="success"
              title="Title"
              description="Get immediate alerts and a notification badge."
              icon={StarIcon}
            />

            <Alert
              variant="success"
              mode="outline"
              title="Title"
              description="Get immediate alerts and a notification badge."
              icon={StarIcon}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
