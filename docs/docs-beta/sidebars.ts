import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';
const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: ['intro', 'getting-started/quickstart', 'getting-started/installation'],
    },
    {
      type: 'category',
      label: 'Tutorial',
      collapsed: false,
      items: ['tutorial/tutorial-etl'],
    },
    {
      type: 'category',
      label: 'Build',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Create a pipeline',
          link: {type: 'doc', id: 'guides/pipelines'},
          items: [
            'guides/data-assets',
            'guides/metadata',
            'guides/partitioning',
            'guides/partition-dependencies',
            'guides/external-assets',
          ],
        },
        {
          type: 'category',
          label: 'Configure',
          items: [
            'guides/configuring-assets',
            'guides/asset-factories',
            //'guides/resources',
            'guides/databases',
            'guides/apis',
            'guides/io-managers',
            'guides/managing-concurrency',
          ],
        },
        {
          type: 'category',
          label: 'Integrate',
          items: ['guides/ingesting-data', 'guides/transform-dbt', 'guides/non-python'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Automate',
      collapsed: false,
      items: [
        'guides/schedules',
        'guides/sensors',
        'guides/asset-sensors',
        'guides/automation',
        //'guides/declarative-automation',
      ],
    },
    {
      type: 'category',
      label: 'Test',
      collapsed: false,
      items: [
        'guides/asset-checks',
        'guides/data-freshness-testing',
        'guides/unit-tests-assets-and-ops',
      ],
    },
    {
      type: 'category',
      label: 'Deploy',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Self-hosting Dagster',
          items: ['guides/kubernetes', 'guides/docker', 'guides/dagster-service'],
        },
        {
          type: 'category',
          label: 'Dagster Plus',
          items: [
            'guides/dagster-plus',
            //'guides/self-hosted-to-dagster-plus'
          ],
        },
        //'guides/secrets',
        //'guides/code-locations',
      ],
    },
    //{
    //  type: 'category',
    //  label: 'Understand',
    //  items: [
    //    {
    //      type: 'category',
    //      label: 'Assets',
    //      items: [
    //        {
    //          type: 'autogenerated',
    //          dirName: 'concepts/assets',
    //        },
    //      ],
    //    },
    //    {
    //      type: 'category',
    //      label: 'Automation and Scheduling',
    //      items: [
    //        {
    //          type: 'autogenerated',
    //          dirName: 'concepts/automation',
    //        },
    //      ],
    //    },
    //    {
    //      type: 'doc',
    //      label: 'Partitions',
    //      id: 'concepts/partitions',
    //    },
    //    {
    //      type: 'doc',
    //      label: 'Resources',
    //      id: 'concepts/resources',
    //    },
    //    {
    //      type: 'doc',
    //      label: 'I/O managers',
    //      id: 'concepts/io-managers',
    //    },
    //    {
    //      type: 'category',
    //      label: 'Ops and jobs',
    //      link: {
    //        type: 'doc',
    //        id: 'concepts/ops-jobs',
    //      },
    //      items: [
    //        {
    //          type: 'autogenerated',
    //          dirName: 'concepts/ops-jobs',
    //        },
    //      ],
    //    },
    //    {
    //      type: 'category',
    //      label: 'Execution',
    //      link: {
    //        type: 'doc',
    //        id: 'concepts/execution',
    //      },
    //      items: [
    //        {
    //          type: 'autogenerated',
    //          dirName: 'concepts/execution',
    //        },
    //      ],
    //    },
    //  ],
    //},
    {
      type: 'category',
      label: 'About',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'about',
        },
      ],
    },
  ],
  integrations: [
    {
      type: 'category',
      label: 'Categories',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'ETL',
          items: [
            'integrations/airbyte',
            'integrations/sdf',
            'integrations/fivetran',
            'integrations/dlt',
            'integrations/census',
            'integrations/dbt',
            'integrations/dbt-cloud',
            'integrations/sling',
            'integrations/hightouch',
            'integrations/meltano',
          ],
        },
        {
          type: 'category',
          label: 'Storage',
          items: [
            'integrations/snowflake',
            'integrations/gcp/bigquery',
            'integrations/aws/athena',
            'integrations/aws/s3',
            'integrations/duckdb',
            'integrations/deltalake',
            'integrations/aws/redshift',
            'integrations/gcp/gcs',
            'integrations/azure-adls2',
            'integrations/lakefs',
          ],
        },
        {
          type: 'category',
          label: 'Compute',
          items: [
            'integrations/kubernetes',
            'integrations/spark',
            'integrations/aws/glue',
            'integrations/jupyter',
            'integrations/aws/emr',
            'integrations/databricks',
            'integrations/aws/lambda',
            'integrations/docker',
            'integrations/shell',
            'integrations/gcp/dataproc',
          ],
        },
        {
          type: 'category',
          label: 'BI',
          items: ['integrations/looker'],
        },
        {
          type: 'category',
          label: 'Monitoring',
          items: ['integrations/prometheus', 'integrations/datadog', 'integrations/aws/cloudwatch'],
        },
        {
          type: 'category',
          label: 'Alerting',
          items: [
            'integrations/slack',
            'integrations/twilio',
            'integrations/pagerduty',
            'integrations/microsoft-teams',
          ],
        },
        {
          type: 'category',
          label: 'Metadata',
          items: [
            'integrations/secoda',
            'integrations/pandera',
            'integrations/open-metadata',
            'integrations/pandas',
          ],
        },
        {
          type: 'category',
          label: 'Other',
          items: [
            'integrations/cube',
            'integrations/aws/secretsmanager',
            'integrations/openai',
            'integrations/ssh-sftp',
            'integrations/github',
            'integrations/aws/ssm',
            'integrations/aws/ecr',
            'integrations/wandb',
            'integrations/hashicorp',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Community Supported',
      items: [
        'integrations/secoda',
        'integrations/cube',
        'integrations/sdf',
        'integrations/open-metadata',
        'integrations/census',
        'integrations/deltalake',
        'integrations/hightouch',
        'integrations/wandb',
        'integrations/meltano',
        'integrations/hashicorp',
        'integrations/lakefs',
      ],
    },
    {
      type: 'category',
      label: 'All Integrations',
      collapsed: true,
      // link: {type: 'doc', id: 'integrations'},
      items: [
        {
          type: 'autogenerated',
          dirName: 'integrations',
        },
      ],
    },
  ],
  dagsterPlus: [
    {
      type: 'category',
      label: 'Getting started',
      collapsible: false,
      className: 'category-non-collapsible',
      items: [
        {
          type: 'doc',
          id: 'dagster-plus/whats-dagster-plus',
        },
        {
          type: 'doc',
          id: 'dagster-plus/getting-started',
        },
      ],
    },
    {
      type: 'category',
      label: 'Features',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Insights',
          link: {
            type: 'doc',
            id: 'dagster-plus/insights',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'dagster-plus/insights',
            },
          ],
        },
        {
          type: 'category',
          label: 'Branch Deployments (CI)',
          link: {
            type: 'doc',
            id: 'dagster-plus/deployment/branch-deployments',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'dagster-plus/deployment/branch-deployments',
            },
          ],
        },
        {
          type: 'category',
          label: 'Alerts',
          link: {
            type: 'doc',
            id: 'dagster-plus/deployment/alerts',
          },
          items: [
            {
              type: 'doc',
              label: 'Manage alerts in the UI',
              id: 'dagster-plus/deployment/alerts/ui',
            },
            {
              type: 'doc',
              label: 'Manage alerts with the CLI',
              id: 'dagster-plus/deployment/alerts/cli',
            },
            {
              type: 'doc',
              label: 'Email',
              id: 'dagster-plus/deployment/alerts/email',
            },
            {
              type: 'doc',
              label: 'Microsoft Teams',
              id: 'dagster-plus/deployment/alerts/microsoft-teams',
            },
            {
              type: 'doc',
              label: 'PagerDuty',
              id: 'dagster-plus/deployment/alerts/pagerduty',
            },
            {
              type: 'doc',
              label: 'Slack',
              id: 'dagster-plus/deployment/alerts/slack',
            },
          ],
        },
        {
          type: 'category',
          label: 'Authentication & access control',
          items: [
            {
              type: 'category',
              label: 'Role-based Access Control',
              link: {
                type: 'doc',
                id: 'dagster-plus/access/rbac',
              },
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'dagster-plus/access/rbac',
                },
              ],
            },
            {
              type: 'category',
              label: 'Single Sign-on (SSO)',
              items: [
                'dagster-plus/access/authentication/azure-ad-sso',
                'dagster-plus/access/authentication/google-workspace-sso',
                'dagster-plus/access/authentication/okta-sso',
                'dagster-plus/access/authentication/onelogin-sso',
                'dagster-plus/access/authentication/pingone-sso',
              ],
            },
            {
              type: 'category',
              label: 'SCIM provisioning',
              items: [
                {
                  type: 'link',
                  label: 'Azure Active Directory',
                  href: 'https://learn.microsoft.com/en-us/azure/active-directory/saas-apps/dagster-cloud-provisioning-tutorial',
                },
                {
                  type: 'doc',
                  label: 'Okta',
                  id: 'dagster-plus/access/authentication/okta-scim',
                },
              ],
            },
          ],
        },
        {
          type: 'doc',
          id: 'dagster-plus/saved-views',
        },
      ],
    },
    {
      type: 'category',
      label: 'Deployment',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Serverless',
          link: {
            type: 'doc',
            id: 'dagster-plus/deployment/serverless',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'dagster-plus/deployment/serverless',
            },
          ],
        },
        {
          type: 'category',
          label: 'Hybrid',
          link: {
            type: 'doc',
            id: 'dagster-plus/deployment/hybrid',
          },
          items: [
            {
              type: 'doc',
              label: 'Tokens',
              id: 'dagster-plus/deployment/hybrid/tokens',
            },
            {
              type: 'category',
              label: 'Agents',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'dagster-plus/deployment/hybrid/agents',
                },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'CI/CD',
          items: [
            {
              type: 'autogenerated',
              dirName: 'dagster-plus/deployment/branch-deployments',
            },
          ],
        },
        {
          type: 'category',
          label: 'Code locations',
          link: {
            type: 'doc',
            id: 'dagster-plus/deployment/code-locations',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'dagster-plus/deployment/code-locations',
            },
          ],
        },
        {
          type: 'category',
          label: 'Environment variables',
          link: {
            type: 'doc',
            id: 'dagster-plus/deployment/environment-variables',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'dagster-plus/deployment/environment-variables',
            },
          ],
        },
        {
          type: 'doc',
          label: 'Settings',
          id: 'dagster-plus/settings',
        },
      ],
    },
  ],
  api: [
    {
      type: 'category',
      label: 'Reference',
      link: {type: 'doc', id: 'api/index'},
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Configuration',
          collapsed: false,
          items: [
            {
              type: 'doc',
              label: 'Dagster YAML',
              id: 'reference/dagster-yaml',
            },
          ],
        },
        {
          type: 'category',
          label: 'Python API',
          items: [
            {
              type: 'autogenerated',
              dirName: 'api',
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;
